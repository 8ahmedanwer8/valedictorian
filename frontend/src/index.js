import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <GoogleOAuthProvider
          clientId={`346148061777-3p3c3pkv6v42u508s5qls23bli0n6ni5.apps.googleusercontent.com`}
        >
          <App />
        </GoogleOAuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
