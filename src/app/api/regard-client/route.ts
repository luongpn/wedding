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

  let list = await Regard.find({ see_regard: "all" })
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);
  let count = await Regard.countDocuments({ see_regard: "all" });
  return Response.json({ list, count, page, limit });
}
