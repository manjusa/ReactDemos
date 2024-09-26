import React from "react";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
export const Login = () => {
  const { instance } = useMsal();
  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login With Azure AD</button>
    </div>
  );
};
