import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@dominio.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
