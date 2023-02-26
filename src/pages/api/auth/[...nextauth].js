import axiosClient from "@lib/axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          const res = await axiosClient.post("/auth/login", {
            email,
            password,
          });

          const user = res.data.user;

          if (res.status === 200 && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
