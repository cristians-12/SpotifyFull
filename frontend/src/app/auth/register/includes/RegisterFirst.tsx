import { UserRegisterCredentials } from "@/types/auth/user-register.type";
import { SetStateAction } from "react";

interface RegisterFirstProps {
  props: {
    setSteps: React.Dispatch<SetStateAction<number>>;
    setUser: React.Dispatch<SetStateAction<UserRegisterCredentials>>;
    user: UserRegisterCredentials;
  };
}

export default function RegisterFirst({
  props,
}: RegisterFirstProps): JSX.Element {
  const { setSteps, setUser, user } = props;

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <p className="text-[3rem] text-center font-bold w-[30%]">
        Regístrate para empezar a escuchar contenido
      </p>
      <div className="flex flex-col lg:w-[35%] mt-10">
        <label htmlFor="email">Dirección de email</label>
        <input
          type="email"
          id="email"
          placeholder="nombre@dominio.com"
          className="bg-transparent border border-white px-3 py-2 rounded-md"
          onChange={(e) => {
            setUser({
              email: e.target.value,
              password: user.password,
            });
          }}
        />
        <p className="text-[#3AE376] underline my-2">
          Usar el número de teléfono.
        </p>
        <button
          onClick={() => {
            if (!user.email || user.email.trim() === "") {
              
              return;
            }
            setSteps((steps) => steps + 1);
          }}
          className="bg-[#3AE376] text-black rounded-xl py-2 font-bold my-4"
        >
          Siguiente
        </button>
        <figure className="flex items-center gap-2 w-full">
          <div className="h-[1px] bg-gray-400 w-full"></div>
          <span>o</span>
          <div className="h-[1px] bg-gray-400 w-full"></div>
        </figure>

        <button className="border border-gray-500 my-1 py-2 rounded-2xl">
          Registrarte con Google
        </button>
        <button className="border border-gray-500 my-1 py-2 rounded-2xl">
          Registrarte con Facebook
        </button>
        <button className="border border-gray-500 my-1 py-2 rounded-2xl">
          Registrarte con Apple
        </button>
      </div>
      <p className="text-gray-400 mt-10">
        ¿Ya tienes una cuenta?{" "}
        <span className="text-white cursor-pointer">Inicia sesión aquí.</span>
      </p>
    </div>
  );
}
