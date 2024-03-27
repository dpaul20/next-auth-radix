import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
