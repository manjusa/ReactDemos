//CLIENT_ID and TENANT_ID both extracted from constants file (externailsing them - not in source code repository)
import { CLIENT_ID, TENANT_ID, API_CLIENT_ID } from "./constants";

export const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: "https://login.microsoftonline.com/" + TENANT_ID,
    redirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "api://" + API_CLIENT_ID + "/access_as_user"],
};
