import { connectDB } from "@/lib/db";
import {Shortener} from "@/Model/LinkShortner"
import { NextResponse } from "next/server";




export async function GET(req, context) {
  await connectDB();

  const { params } = context;
  const { code } = await params; 

 const data = await Shortener.findOne({code});

  if (!data) {
    return NextResponse.json({ error: "Short URL not found" }, { status: 404 });
  }

  return NextResponse.redirect(data.originalUrl);
}