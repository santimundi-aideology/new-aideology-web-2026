// Stub for static export - replace with actual server action for production
import { z } from "zod"

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

  // Static export stub - replace with actual server action for production
  console.log("Form data submitted (static export):", validatedFields.data)

  return { 
    message: "Thank you for your message! Please contact us directly via email for immediate assistance.", 
    success: true 
  }
}
