// Stub for static export - replace with actual server action for production
interface BookingData {
  name: string
  email: string
  company: string
  jobTitle: string
  projectDescription: string
  selectedDate: Date | undefined
  selectedTime: string
}

export async function submitBooking(data: BookingData) {
  // Static export stub - replace with actual implementation
  console.log('Booking submitted (static export):', data)
  
  return {
    success: true,
    message: 'Thank you for your interest! Please contact us directly to schedule your discovery call.'
  }
}
