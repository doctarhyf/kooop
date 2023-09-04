import { useEffect, useRef, useState } from "react";
import { LoggedInUser, SignInWithPhoneNumber } from "../db/db";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/utils";
import koop from "../assets/koop.png";
import google from "../assets/icons/google.svg";
import phone from "../assets/icons/phone.svg";
import icon from "../assets/docta.jpg";
import "../App.css";
import key from "../assets/icons/key.png";
import DebugMenu from "../comp/DebugMenu";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../db/fb.config";
export default function PageLogin() {
  //const [otp, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+243893092849");
  const refOTP = useRef();

  const requestOTP = (e) => {
    e.preventDefault();

    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-cont", {
        /*   size: "invisible", */
        callback: (response) => {
          console.log(response);
        },
      });
    };

    if (phoneNumber.length >= 12) {
      setShowOTP(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    //setOTP(otp);

    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          console.log("user", user);
        })
        .catch((error) => {
          console.log("error => ", error);
        });
    }
  };

  return (
    <div className=" ">
      <DebugMenu />

      <div>Sign in with phone number</div>

      <div>Phone number</div>
      <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <p>Please enter your phone number</p>

      {showOTP && (
        <div>
          <div>OTP</div>
          <input type="text" maxLength={6} onChange={verifyOTP} />
        </div>
      )}

      {!showOTP && <button onClick={(e) => requestOTP(e)}>Request OTP</button>}

      <div id="recaptcha-cont"></div>
    </div>
  );
}
