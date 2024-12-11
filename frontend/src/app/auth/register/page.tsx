"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import RegisterFirst from "./includes/RegisterFirst";
import RegisterSecond from "./includes/RegisterSecond";
import { UserRegisterCredentials } from "@/types/auth/user-register.type";

function AuthPage() {
  const [steps, setSteps] = useState<number>(1);
  const [user, setUser] = useState<UserRegisterCredentials>({
    email: "",
    password: "",
  });

  return (
    <main className="flex flex-col justify-center items-center min-h-[80vh]">
      <Link href={"/"}>
        <FaSpotify color="white" size={50} />
      </Link>
      {steps === 1 && <RegisterFirst props={{ setSteps, setUser, user }} />}
      {steps === 2 && (
        <RegisterSecond props={{ setUser, user, setSteps, steps }} />
      )}
    </main>
  );
}
AuthPage.disableLayout = true;

export default AuthPage;
