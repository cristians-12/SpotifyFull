import { UserRegisterCredentials } from "@/types/auth/user-register.type";
import { IoChevronBack } from "react-icons/io5";

interface RegisterThirdProps {
  props: {
    setSteps: React.Dispatch<React.SetStateAction<number>>;
    steps: number;
    setUser: React.Dispatch<React.SetStateAction<UserRegisterCredentials>>;
    user: UserRegisterCredentials;
  };
}

export default function RegisterThird({ props }: RegisterThirdProps) {
  const { setSteps, steps, setUser, user } = props;

  return (
    <>
      <div className="h-[2px] my-7 w-[25%] bg-gray-500">
        <div className={`h-full bg-green-500 w-[60%]`}></div>
      </div>
      <div className="w-[20%]">
        <div className="flex items-center gap-5">
          <IoChevronBack
            className="ms-[-50px] cursor-pointer"
            size={30}
            onClick={() => setSteps(steps - 1)}
          />
          <div>
            <p className="font-light text-gray-500">Paso 2 de 3</p>
            <p>Cuentanos sobre ti</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mt-10">
            Nombre
          </label>
          <p className="text-gray-400">Este nombre aparecera en tu perfil</p>
          <input
            type="text"
            id="name"
            className="bg-transparent border border-white px-3 py-2 rounded-md"
            onChange={(e) =>
              setUser({
                name: e.target.value,
                email: user.email,
                password: user.password,
              })
            }
          />
        </div>
        <button
          onClick={() => {
            if (user.name) {
              setSteps(steps + 1);
            }
          }}
          className="bg-[var(--principal)] w-full text-black mt-5 py-3 px-10 rounded-full font-bold"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
