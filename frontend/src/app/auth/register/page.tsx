"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import RegisterFirst from "./includes/RegisterFirst";
import RegisterSecond from "./includes/RegisterSecond";
import { UserRegisterCredentials } from "@/types/auth/user-register.type";
import RegisterThird from "./includes/RegisterThird";
import useFetchs from "@/hooks/useFetchs";
import { useRouter } from "next/navigation";

function AuthPage() {
  const [steps, setSteps] = useState<number>(1);
  const [user, setUser] = useState<UserRegisterCredentials>({
    email: "",
    password: "",
    name: "",
  });

  const { data, fetchData } = useFetchs();

  const registerUser = () => {
    fetchData(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]);

  return (
    <main className="flex flex-col justify-center items-center min-h-[80vh]">
      <Link href={"/"}>
        <FaSpotify color="white" size={50} />
      </Link>
      {steps === 1 && <RegisterFirst props={{ setSteps, setUser, user }} />}
      {steps === 2 && (
        <RegisterSecond props={{ setUser, user, setSteps, steps }} />
      )}
      {steps === 3 && (
        <RegisterThird props={{ setSteps, steps, setUser, user }} />
      )}
      {steps == 4 && (
        <div>
          <h1 className="mt-10">Gracias por completar el registro</h1>
          <button
            onClick={() => registerUser()}
            className="bg-[var(--principal)] w-full text-black mt-5 py-3 px-10 rounded-full font-bold"
          >
            Registrame
          </button>
        </div>
      )}
    </main>
  );
}
AuthPage.disableLayout = true;

export default AuthPage;
