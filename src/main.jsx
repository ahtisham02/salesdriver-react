import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const root = ReactDOM.createRoot(document.getElementById("root"));
const RECAPTCHA_V3_SITE_KEY = "6Led3SArAAAAAAiW9FWjhMbwapzP2A7S3JyV9hVy";
if (
  !RECAPTCHA_V3_SITE_KEY ||
  RECAPTCHA_V3_SITE_KEY === "6Led3SArAAAAAAiW9FWjhMbwapzP2A7S3JyV9hVy"
) {
  console.error(
    "CRITICAL: reCAPTCHA Site Key is missing or still set to placeholder!"
  );
}
root.render(
  // <GoogleReCaptchaProvider
  //   reCaptchaKey={RECAPTCHA_V3_SITE_KEY}
  //   scriptProps={{
  //     async: true,
  //     defer: true,
  //     appendTo: "head",
  //     nonce: undefined,
  //   }}
  // >
    <BrowserRouter>
      <MainRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </BrowserRouter>
  // </GoogleReCaptchaProvider>
);
