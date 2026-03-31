import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "Všechna pole jsou povinná" },
        { status: 400 }
      );
    }

    // Log the submission (for development)
    console.log("📧 Nová poptávka:", {
      jméno: data.name,
      email: data.email,
      telefon: data.phone,
      zpráva: data.message,
      čas: new Date().toISOString(),
    });

    // TODO: Add email sending here
    // Options:
    // 1. Resend (https://resend.com) - recommended for Vercel
    // 2. SendGrid
    // 3. Nodemailer with SMTP
    //
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'web@kralelektroinstalace.cz',
    //   to: 'info@kralelektroinstalace.cz',
    //   subject: `Nová poptávka od ${data.name}`,
    //   html: `
    //     <h2>Nová poptávka z webu</h2>
    //     <p><strong>Jméno:</strong> ${data.name}</p>
    //     <p><strong>E-mail:</strong> ${data.email}</p>
    //     <p><strong>Telefon:</strong> ${data.phone}</p>
    //     <p><strong>Zpráva:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Zpráva byla úspěšně odeslána" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Chyba při zpracování formuláře:", error);
    return NextResponse.json(
      { error: "Něco se pokazilo. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }
}
