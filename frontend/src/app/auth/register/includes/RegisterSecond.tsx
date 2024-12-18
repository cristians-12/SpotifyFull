import { UserRegisterCredentials } from "@/types/auth/user-register.type";
import { IoCheckmarkCircleSharp, IoChevronBack } from "react-icons/io5";
import { useState } from "react";
import InputPassword from "@/components/auth/InputPassword";

interface RegisterSecondProps {
  props: {
    setUser: React.Dispatch<React.SetStateAction<UserRegisterCredentials>>;
    user: UserRegisterCredentials | null;
    setSteps: React.Dispatch<React.SetStateAction<number>>;
    steps: number;
  };
}

export default function RegisterSecond({ props }: RegisterSecondProps) {
  const { setUser, user, setSteps, steps } = props;
  const [validation, setValidation] = useState({
    hasLetter: false,
    hasNumberOrSpecialChar: false,
    hasMinLength: false,
  });

  const validatePassword = (password: string) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumberOrSpecialChar = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 10;

    setValidation({ hasLetter, hasNumberOrSpecialChar, hasMinLength });
    return hasLetter && hasNumberOrSpecialChar && hasMinLength;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setUser({ password, email: user?.email ?? null, name: user?.name ?? null });
    validatePassword(password);
  };

  return (
    <>
      <div className="h-[2px] my-7 w-[25%] bg-gray-500">
        <div className={`h-full bg-green-500 w-[30%]`}></div>
      </div>
      <main className="flex flex-col gap-2 w-[21%]">
        <div className="flex items-center gap-5">
          <IoChevronBack
            onClick={() => setSteps(steps - 1)}
            className="ms-[-50px] cursor-pointer"
            size={30}
          />
          <div>
            <p className="font-light text-gray-500">Paso 1 de 3</p>
            <p>Crea una contraseña</p>
          </div>
        </div>
        <label htmlFor="password" className="mt-10">
          Contraseña
        </label>
        <InputPassword props={{ handlePasswordChange }} />
        <p className="mt-5">La contraseña debe tener al menos:</p>
        <div>
          <figure className="flex items-center gap-2">
            {validation.hasLetter ? (
              <IoCheckmarkCircleSharp color="#3BE477" size={18} />
            ) : (
              <div className="w-[15px] h-[15px] border border-gray-300 rounded-full"></div>
            )}
            1 letra
          </figure>
          <figure className="flex items-center gap-2">
            {validation.hasNumberOrSpecialChar ? (
              <IoCheckmarkCircleSharp color="#3BE477" size={18} />
            ) : (
              <div className="w-[15px] h-[15px] border border-gray-300 rounded-full"></div>
            )}
            1 número o carácter especial (ejemplo: #, ?, ! o &)
          </figure>
          <figure className="flex items-center gap-2">
            {validation.hasMinLength ? (
              <IoCheckmarkCircleSharp color="#3BE477" size={18} />
            ) : (
              <div className="w-[15px] h-[15px] border border-gray-300 rounded-full"></div>
            )}
            10 caracteres
          </figure>
          <button
            className="bg-[var(--principal)] text-black w-full mt-5 py-3 rounded-full font-bold"
            onClick={() => {
              if (
                validation.hasMinLength &&
                validation.hasLetter &&
                validation.hasNumberOrSpecialChar
              ) {
                setSteps(steps + 1);
              }
            }}
          >
            Siguiente
          </button>
        </div>
      </main>
    </>
  );
}
