import LandingPage from "@components/home/templates/LandingPage";
import About from "@components/home/templates/About";
import Features from "@components/home/templates/Features";
import Contact from "@components/home/templates/Contact";
import Testimonial from "@components/home/templates/Testimonial";
import RootLayout from "@components/UI/templates/RootLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "@store/actions/cartAction";
import { useSession } from "next-auth/react";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSession();

  // useEffect(() => {
  //   const userId = data?.user._id;
  //   dispatch(fetchCartItems(userId));
  // }, [dispatch, data]);

  return (
    <RootLayout>
      <LandingPage />
      <About />
      <Features />
      <Contact />
      <Testimonial />
    </RootLayout>
  );
}
