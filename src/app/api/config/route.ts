import prisma from "@/lib/prisma";

export async function GET() {
  const bride = await prisma.config.findFirst({
    where: {
      key: "bride",
    },
  });

  const groom = await prisma.config.findFirst({
    where: {
      key: "groom",
    },
  });

  const date = await prisma.config.findFirst({
    where: {
      key: "date",
    },
  });

  return Response.json({ bride, groom, date });
}
