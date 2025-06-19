import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedFields = ContactFormSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          errors: validatedFields.error.flatten().fieldErrors,
          message: "Validation failed. Please check the form fields.",
          success: false,
        },
        { status: 400 }
      )
    }

    const webhookUrl = "https://hooks.zapier.com/hooks/catch/22856089/uywgpwx/"
    
    // Send data to webhook as JSON
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        company: validatedFields.data.company || "",
        subject: validatedFields.data.subject,
        message: validatedFields.data.message,
        timestamp: new Date().toISOString(),
        source: "aideology_website_contact_form"
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log("Webhook response:", result)

    return NextResponse.json({ 
      message: "Thank you for your message! We'll get back to you soon.", 
      success: true 
    })
  } catch (error) {
    console.error("Error sending to webhook:", error)
    return NextResponse.json(
      {
        message: "There was an error sending your message. Please try again or contact us directly.",
        success: false,
      },
      { status: 500 }
    )
  }
} 