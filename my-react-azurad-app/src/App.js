import logo from "./logo.svg";
import "./App.css";
import { useIsAuthenticated } from "@azure/msal-react";
import { Login } from "./Login";
function App() {
  const isAuthenticated = useIsAuthenticated();
  debugger;
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
