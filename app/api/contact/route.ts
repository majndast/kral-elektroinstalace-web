import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // -- Resend integration --
    // 1. npm install resend
    // 2. Add RESEND_API_KEY to .env.local
    // 3. Uncomment the code below:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'web@kral-elektroinstalace.cz',
    //   to: 'info@kral-elektroinstalace.cz',
    //   subject: `Nová poptávka od ${name}`,
    //   html: `
    //     <h2>Nová poptávka z webu</h2>
    //     <p><strong>Jméno:</strong> ${name}</p>
    //     <p><strong>Telefon:</strong> ${phone}</p>
    //     <p><strong>E-mail:</strong> ${email || '—'}</p>
    //     <p><strong>Zpráva:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    console.log('[contact form]', { name, phone, email, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact form error]', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
