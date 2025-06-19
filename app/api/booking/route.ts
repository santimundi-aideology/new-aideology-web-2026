import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const BookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  projectDescription: z.string().min(10, { message: "Project description must be at least 10 characters." }),
  selectedTopics: z.array(z.string()).min(1, { message: "Please select at least one topic." }),
  selectedDate: z.string(),
  selectedTime: z.string(),
  type: z.string().optional(),
  fromPage: z.string().optional(),
})

// Function to convert 24-hour time to 12-hour format
function convertTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours, 10)
  const minute = minutes || '00'
  
  if (hour === 0) {
    return `12:${minute} AM`
  } else if (hour < 12) {
    return `${hour}:${minute} AM`
  } else if (hour === 12) {
    return `12:${minute} PM`
  } else {
    return `${hour - 12}:${minute} PM`
  }
}

// Function to convert ISO date to readable format with ordinal suffix
function convertToReadableDate(isoDate: string): string {
  const date = new Date(isoDate)
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  
  // Add ordinal suffix to day
  const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
      return 'th'
    }
    switch (day % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }
  
  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`
}

// Function to create ISO datetime format from date and time
function createISODateTime(date: string, time: string): string {
  return `${date}T${time}`
}

// Function to add one hour to ISO datetime
function addOneHour(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  date.setHours(date.getHours() + 1);
  return date.toISOString().slice(0, 16); // Returns YYYY-MM-DDTHH:MM format
}

// Function to format datetime in Dubai timezone format: "6/10/2025 2PM GST"
function formatDubaiDateTime(isoDate: string, time24: string): string {
  const date = new Date(isoDate)
  const month = date.getMonth() + 1 // getMonth() returns 0-11
  const day = date.getDate()
  const year = date.getFullYear()
  
  // Convert 24-hour time to 12-hour format without minutes if :00
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours, 10)
  const minutePart = minutes === '00' ? '' : `:${minutes}`
  
  let time12Hour = ''
  if (hour === 0) {
    time12Hour = `12${minutePart}AM`
  } else if (hour < 12) {
    time12Hour = `${hour}${minutePart}AM`
  } else if (hour === 12) {
    time12Hour = `12${minutePart}PM`
  } else {
    time12Hour = `${hour - 12}${minutePart}PM`
  }
  
  return `${month}/${day}/${year} ${time12Hour} GST`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedFields = BookingFormSchema.safeParse(body)

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

    const webhookUrl = "https://hooks.zapier.com/hooks/catch/22856089/uywj99h/"
    
    // Convert time to 12-hour format
    const formattedTime = convertTo12Hour(validatedFields.data.selectedTime)
    
    // Convert date to readable format
    const formattedDate = convertToReadableDate(validatedFields.data.selectedDate)
    
    // Create ISO datetime format for calculations
    const isoStartTime = createISODateTime(validatedFields.data.selectedDate, validatedFields.data.selectedTime)
    const isoEndTime = addOneHour(isoStartTime)
    
    // Format start and end times in Dubai timezone format
    const startTime = formatDubaiDateTime(validatedFields.data.selectedDate, validatedFields.data.selectedTime)
    
    // For end time, we need to extract date and time from the ISO end time
    const endDate = new Date(isoEndTime)
    const endTimeFormatted = formatDubaiDateTime(
      endDate.toISOString().split('T')[0], 
      `${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}`
    )
    
    // Send data to webhook as JSON
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Basic Info (Step 1)
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        company: validatedFields.data.company,
        jobTitle: validatedFields.data.jobTitle,
        
        // Project Details (Step 2)
        projectDescription: validatedFields.data.projectDescription,
        selectedTopics: validatedFields.data.selectedTopics,
        
        // Schedule (Step 3)
        selectedDate: formattedDate,
        selectedDateOriginal: validatedFields.data.selectedDate, // Keep original format for reference
        selectedTime: formattedTime,
        selectedTimeOriginal: validatedFields.data.selectedTime, // Keep original format for reference
        startTime: startTime,     // Dubai format: 6/10/2025 2PM GST
        endTime: endTimeFormatted, // Dubai format: 6/10/2025 3PM GST
        
        // Additional metadata
        bookingType: validatedFields.data.type || "discovery-call",
        fromPage: validatedFields.data.fromPage || "",
        timestamp: new Date().toISOString(),
        source: "aideology_website_booking_form"
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log("Webhook response:", result)

    const bookingTypeText = validatedFields.data.type === 'demo' ? 'demo' : 
                           validatedFields.data.type === 'consultation' ? 'consultation' : 
                           validatedFields.data.type === 'assessment' ? 'assessment' : 
                           'discovery call'

    return NextResponse.json({ 
      message: `Thank you for your ${bookingTypeText} request! We have received your preferred time and will get back to you shortly to confirm the appointment.`, 
      success: true 
    })
  } catch (error) {
    console.error("Error sending to webhook:", error)
    return NextResponse.json(
      {
        message: "There was an error sending your request. Please try again or contact us directly.",
        success: false,
      },
      { status: 500 }
    )
  }
} 