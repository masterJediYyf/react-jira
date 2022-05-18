import React, { useState } from "react";
import { RegisterScreen } from "./login";
import { LoginScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        替换到{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};
