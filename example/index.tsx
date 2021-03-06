import * as React from "react";
import * as ReactDom from "react-dom";
import { GoogleRecaptchaExample } from "./google-recaptcha-example";
import { GoogleReCaptchaProvider } from "../src/google-recaptcha-provider";

ReactDom.render(
  <GoogleReCaptchaProvider reCaptchaKey="6Ld2oX4UAAAAACqWA9-3ostCypVeQRd4JPIT6dZR">
    <h2>Google Recaptcha Example</h2>
    <GoogleRecaptchaExample />
  </GoogleReCaptchaProvider>,
  document.getElementById("app")
);
