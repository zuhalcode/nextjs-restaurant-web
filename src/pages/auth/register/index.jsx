import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import AuthLayout from "@components/auth/templates/AuthLayout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout head="Register Page">
      <form className="flex flex-col items-start justify-start space-y-5 px-5 pt-24">
        <p className="text-2xl font-semibold">Create an Account</p>

        <Input
          name="name"
          placeholder="Name"
          value={state.name}
          handleOnChange={handleOnChange}
          className="border-b"
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          handleOnChange={handleOnChange}
          className="border-b"
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          handleOnChange={handleOnChange}
          className="border-b"
        />

        <Button size="sm" className="mx-auto mt-3 w-full">
          Create Account
        </Button>
        <div className="mx-auto mt-5 flex gap-1 text-center text-sm">
          Already have an account ?
          <Link
            href="/auth/login"
            className="cursor-pointer underline underline-offset-2 hover:text-blue-500"
          >
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
