import { authOptions } from "@/libs/authOptions";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};
export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Container className="px-4 md:px-0">
      <header className="my-4 bg-slate-900 p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Next Auth Radix </h1>

        <p>
          This is a Next.js app with authentication using NextAuth.js and Radix
          UI.
        </p>

        <div className="mt-8">
          <Link
            href={"/auth/login"}
            className="text-blue-500 rounded-md py-2 px-4 bg-blue-100 mt-4"
          >
            Sign in
          </Link>
        </div>
      </header>
    </Container>
  );
}
