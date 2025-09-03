import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { data_conn } from "@/config/database";

export async function POST(req) {
  try {
    const formData = await req.formData();
     const fullname = formData.get("fullname");
    const email = formData.get("email");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contactNumber = formData.get("contactNumber");
    const file = formData.get("image");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), "app", "schoolImage");

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    //insert into db
    await data_conn.execute(
      "INSERT INTO school (name, email_id, address, city, state, contact_number, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fullname, email, address, city, state, contactNumber, fileName]
    );

    return NextResponse.json({
      message: "File uploaded successfully",
      fileName,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
