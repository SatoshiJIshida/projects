import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// For testing.
// import { render } from "@testing-library/react";
// import SignupScreen from "./views/signup-screen";
// import LoginScreen from "./views/login-screen";
// import RequestScreen from "./views/request-screen";
// import ContactsScreen from "./views/contacts-screen";
// import ChatScreen from "./views/chat-screen";
// import PasswordResetScreen from "./views/password-reset-screen";
/**
 * Testing version of render.
 */
// const root = document.createElement("root");
// beforeEach(() => {
//   document.body.appendChild(root);

//   const content = (
//     <React.StrictMode>
//       <PasswordResetScreen />
//     </React.StrictMode>
//   );

//   render(content, root);
// });

//////////////////////////////////////////////////////////////////////////////////////

/**
 * Index.
 * @author [Satoshi Ishida]
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export { root };
