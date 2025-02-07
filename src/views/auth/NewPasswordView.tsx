import NewPasswordToken from "@/components/auth/NewPasswordToken.tsx";
import NewPasswordForm from "@/components/auth/NewPasswordForm.tsx";
import { useState } from "react";
import type { ConfirmToken } from "@/types/index.ts";


const NewPasswordView = () => {
  const [token, setToken] = useState<ConfirmToken['token']>("");
    const [isValidToken, setIsValidToken] = useState(false);
  return (
    <>
      <h1 className="text-5xl font-black text-white">Reestablecer Password</h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingresa el código que recibiste {""}
        <span className=" text-fuchsia-500 font-bold"> por e-mail</span>
      </p>

      {!isValidToken ? (
        <NewPasswordToken
          token={token}
          setToken={setToken}
          setIsValidToken={setIsValidToken}
        />
      ) : (
        <NewPasswordForm token={token} />
      )}
    </>
  );
}

export default NewPasswordView