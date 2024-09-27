//CLIENT_ID and TENANT_ID both extracted from constants file (externailsing them - not in source code repository)
import { CLIENT_ID } from "./constants";
import { TENANT_ID } from "./constants";

export const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: "https://login.microsoftonline.com/TENANT_ID",
    redirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["openid", "profile"],
};
