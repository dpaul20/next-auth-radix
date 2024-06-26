import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });
  return NextResponse.json(newProject, { status: 201 });
}
