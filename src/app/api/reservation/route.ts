import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "fireandfeastrestaurant4444@gmail.com",
      subject: "New Table Reservation",
      html: `
        <h2>New Reservation</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Date:</b> ${data.date}</p>
        <p><b>Time:</b> ${data.time}</p>
        <p><b>Guests:</b> ${data.guests}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Reservation Confirmation - Fire & Feast",
      html: `
    <h1>Thank You, ${data.name}!</h1>

    <p>Your reservation request has been received.</p>

    <h3>Reservation Details</h3>

    <p><b>Date:</b> ${data.date}</p>
    <p><b>Time:</b> ${data.time}</p>
    <p><b>Guests:</b> ${data.guests}</p>
    <p><b>Location:</b> ${data.location}</p>

    <p>
      We look forward to welcoming you to
      Fire & Feast Restaurant.
    </p>

    <p>
      Phone: +91 77999 22268
    </p>
  `,
    });

    console.log("Mail sent:", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}