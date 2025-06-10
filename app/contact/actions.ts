"use server"
import { z } from "zod"
import { Resend } from "resend"

// Define the schema for form validation using Zod
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type State = {
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    subject?: string[]
    message?: string[]
  }
  message?: string | null
  success: boolean
}

// This is a placeholder for your actual email sending logic
// For a real application, you'd integrate an email service like Resend, SendGrid, etc.
async function sendEmail(data: { name: string; email: string; company?: string; subject: string; message: string }) {
  // Simulate email sending delay
  // await new Promise(resolve => setTimeout(resolve, 1500));

  // Example using Resend (ensure RESEND_API_KEY is set in your environment variables)
  const resend = new Resend(process.env.RESEND_API_KEY)
  const yourEmailAddress = process.env.CONTACT_FORM_RECEIVER_EMAIL || "aideology@aideology.ai" // Fallback, set this in .env

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: `AIdeology Contact Form <onboarding@resend.dev>`, // Replace with your verified Resend domain/email
      to: [yourEmailAddress],
      subject: `New Contact Form Submission: ${data.subject}`,
      replyTo: data.email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return { success: false, message: "Failed to send email due to a server error." }
    }

    console.log("Email sent successfully:", emailData)
    return { success: true, message: "Thank you for your message! We'll get back to you soon." }
  } catch (error) {
    console.error("Error in sendEmail function:", error)
    return { success: false, message: "An unexpected error occurred while sending the email." }
  }
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form fields.",
      success: false,
    }
  }

  try {
    // Here you would typically send an email or save to a database
    console.log("Form data submitted:", validatedFields.data)

    const emailResult = await sendEmail(validatedFields.data)

    if (emailResult.success) {
      return { message: emailResult.message, success: true }
    } else {
      return { message: emailResult.message || "Failed to send message.", success: false }
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { message: "An unexpected error occurred. Please try again later.", success: false }
  }
}
