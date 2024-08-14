import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
        from: email, 
        to: process.env.EMAIL_USER, 
        subject: `New message from ${name}`,
        text: message,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
        });

        return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}
