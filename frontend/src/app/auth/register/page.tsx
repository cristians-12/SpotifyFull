"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import RegisterFirst from "./includes/RegisterFirst";

function AuthPage() {
  const [steps, setSteps] = useState<number>(1);

  return (
    <main className="flex flex-col justify-center items-center min-h-[80vh]">
      <Link href={"/"}>
        <FaSpotify color="white" size={50} />
      </Link>
      {steps === 1 && <RegisterFirst setSteps={setSteps} />}
    </main>
  );
}
AuthPage.disableLayout = true;

export default AuthPage;
