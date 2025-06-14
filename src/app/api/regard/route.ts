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

  const search = request.nextUrl?.searchParams?.get("search") || "";
  const from_date = request.nextUrl?.searchParams?.get("from_date") || "";
  const to_date = request.nextUrl?.searchParams?.get("to_date") || "";
  const attend = request.nextUrl?.searchParams?.get("attend") || "";
  const see_regard = request.nextUrl?.searchParams?.get("see_regard") || "";

  const events = request.nextUrl?.searchParams?.get("events")
    ? request.nextUrl?.searchParams?.get("events")?.split(",")
    : "";

  const guest = request.nextUrl?.searchParams?.get("guest")
    ? request.nextUrl?.searchParams?.get("guest")?.split(",")
    : "";

  const skip = (page - 1) * limit;

  const filter = {
    ...(search && {
      $or: [
        {
          name: { $regex: search, $options: "i" },
        },
        {
          regard: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    }),

    ...(events && {
      events: {
        $all: events,
      },
    }),
    ...(guest && {
      guest: {
        $all: guest,
      },
    }),
    ...(attend && {
      attend: attend,
    }),
    ...(see_regard && {
      see_regard: see_regard,
    }),
    ...(from_date
      ? {
          created_date: {
            $gte: from_date,
          },
        }
      : {}),
    ...(to_date
      ? {
          created_date: {
            $lte: to_date,
          },
        }
      : {}),
  };

  let list = await Regard.find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);
  let count = await Regard.countDocuments(filter);
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
