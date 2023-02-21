import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import AuthLayout from "@components/auth/templates/AuthLayout";
import Link from "next/link";
import { login } from "@store/actions/authAction";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.userData);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(state.email, state.password));
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout head="Login Page">
      <form
        className="flex flex-col items-center justify-center px-5 pt-24"
        onSubmit={handleOnSubmit}
      >
        <p className="text-2xl font-semibold">Welcome Back</p>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          handleOnChange={handleOnChange}
          className="mb-1 border-b"
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          handleOnChange={handleOnChange}
          className="mb-1 border-b"
        />

        <Link
          href="/auth/login"
          className="cursor-pointer self-end text-xs underline underline-offset-2 hover:text-blue-500"
        >
          Forgot Password
        </Link>

        <Button size="sm" className="mx-auto mt-3 w-full">
          Login
        </Button>

        <div className="mx-auto mt-3 flex gap-1 text-center text-sm">
          Don&apos;t have an account ?
          <Link
            href="/auth/register"
            className="cursor-pointer underline underline-offset-2 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
