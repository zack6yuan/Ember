import { NextResponse } from "next/server";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwH159ppIsUIc9Riv5uckPvGghb1Z_ARc82_39pYJgLPqKEre9mNpbcODy6kS9SsUI2/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send as URL-encoded form data — most reliable for Google Apps Script
    const formData = new URLSearchParams();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
      redirect: "follow",
    });

    const text = await response.text();
    console.log("Google Script response:", response.status, text);

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("Waitlist submission error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
