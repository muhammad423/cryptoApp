import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./app/apiSlice";
import { MyProvider } from "./components/MyContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-hqlnz76kkfi0jaoh.us.auth0.com"
    clientId="zsfz6pJJEtKJy2yAUrzGVPpjrzNUr9mL"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <MyProvider>
          <App />
        </MyProvider>
      </Provider>
    </BrowserRouter>
    ,
  </Auth0Provider>
);
