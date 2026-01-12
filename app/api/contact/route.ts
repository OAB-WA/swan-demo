import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const name = body.get('name') as string
    const email = body.get('email') as string
    const subject = body.get('subject') as string
    const service = body.get('service') as string
    const message = body.get('message') as string

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the form submission (you can replace this with your preferred storage method)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      service,
      message,
    })

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}
