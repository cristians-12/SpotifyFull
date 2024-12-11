"use client";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface InputPasswordProps {
  props: {
    handlePasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

const InputPassword = ({ props }: InputPasswordProps) => {
  const [watch, setWatch] = useState<boolean>(false);
  const { handlePasswordChange } = props;
  return (
    <section className="relative w-full">
      <input
        type={`${watch ? "text" : "password"}`}
        className={`bg-transparent border border-gray-600 p-2 rounded-md w-full`}
        id="password"
        placeholder="Escribe una contraseña segura"
        onChange={handlePasswordChange}
      />
      <figure className="absolute right-3 top-3">
        {watch ? (
          <IoEyeOffOutline onClick={() => setWatch(false)} size={20} />
        ) : (
          <IoEyeOutline onClick={() => setWatch(true)} size={20} />
        )}
      </figure>
    </section>
  );
};

export default InputPassword;
