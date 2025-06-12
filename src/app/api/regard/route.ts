import dbConnect from "@/lib/mongodb";
import Regard from "@/models/Regard";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const page = request.nextUrl?.searchParams?.get("page")
    ? parseInt(request.nextUrl?.searchParams?.get("page"))
    : 1;
  const limit = request.nextUrl?.searchParams?.get("limit")
    ? parseInt(request.nextUrl?.searchParams?.get("limit"))
    : 12;

  const skip = (page - 1) * limit;

  let list = await Regard.find({}).sort({ _id: -1 }).skip(skip).limit(limit);
  let count = await Regard.countDocuments({});
  return Response.json({ list, count, page, limit });
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();

  // e.g. Insert new user into your DB
  await Regard.create({
    ...body,
    created_date: new Date(),
  });

  return Response.json({});
}
