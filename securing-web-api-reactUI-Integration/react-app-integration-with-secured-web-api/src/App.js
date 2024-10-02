import "./App.css";
import { useIsAuthenticated } from "@azure/msal-react";
import { Login } from "./Login";
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    if (authToken) {
      fetch("https://localhost:7297/Weatherforecast", {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors here
          debugger;
          console.error(error);
        });
    }
  }, [authToken]);

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          setAuthToken(response.accessToken);
        });
    }
  }, [accounts, instance]);

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome to our application. You are logged in</h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
