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
  const [error, seterror] = useState(false);
  const [otp, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+243893092849");
  const [images, setimages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    setimages([]);

    const resp = await fetch("https://picsum.photos/v2/list");
    const pics = await resp.json();

    setimages(pics);
    console.log(pics);
  }

  const requestOTP = (e) => {
    e.preventDefault();

    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-cont", {
        size: "invisible",
        callback: (response) => {
          console.log("da resp ==> \n", response);
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

  function userExistsInFirestore(user) {
    return true;
  }

  const verifyOTP = (e) => {
    seterror(false);
    console.log(otp);

    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          seterror(false);
          const user = result.user;
          console.log("user", user);

          if (userExistsInFirestore(user)) {
            //login
          } else {
            //create new user
            //then login
          }
        })
        .catch((error) => {
          seterror(error);
          console.log("error => ", error);
        });
    }
  };

  return (
    <div className=" flex md:flex-none  bg-[url('./bglogin.webp')]   h-[100vh] ">
      {false && <DebugMenu />}
      <div className="mx-auto max-w-[360px]">
        <div className="">
          <img src={koop} className="mx-auto" />
          <p className="p-4 text-center text-white font-serif italic">
            1000 + des services et koops a votre pointe du doigts
          </p>
        </div>

        <div className=" rounded-md shadow-md p-4 bg-white mx-4 ">
          <div className="text-blue-500 text-xl ">
            Sign in with phone number
          </div>

          <div className="font-bold">Phone number</div>
          <input
            className=" outline-0 hover:border-blue-500 focus:border-b-blue-600 p-2 border rounded-md border-gray-400 w-full"
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <p className="text-sm text-gray-600">
            Please enter your phone number
          </p>

          {showOTP && (
            <div>
              <div>OTP</div>
              <input
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                type="text"
                maxLength={6}
                className=" outline-0 hover:border-blue-500 focus:border-b-blue-600 p-2 border rounded-md border-gray-400 w-full"
              />
              <p
                className={`text-sm  rounded-md ${
                  error ? "my-4 text-white p-2 bg-red-500" : "text-gray-600"
                } `}
              >
                {error
                  ? "OTP error please check the OTP in the SMS received"
                  : "Please enter the OTP received by SMS"}
              </p>
            </div>
          )}

          {/*  {!showOTP && ( */}
          <button
            disabled={otp.replace(" ", "").length !== 6 && showOTP}
            className={` ${
              showOTP && otp.replace(" ", "").length !== 6
                ? "disabled:bg-gray-400 disabled:border-gray-600 disabled:text-gray-300"
                : ""
            }   border text-blue-500 hover:text-white hover:bg-blue-500 border-blue-500 rounded-md p-1 mx-auto`}
            onClick={(e) => (showOTP ? verifyOTP(e) : requestOTP(e))}
          >
            {showOTP ? "Verify OTP" : "Request OTP"}
          </button>

          {showOTP && (
            <button
              className="border text-red-500 hover:text-white hover:bg-red-500 border-red-500 rounded-md p-1 mx-auto"
              onClick={(e) => setShowOTP(false)}
            >
              RETRY
            </button>
          )}

          {/*  )} */}

          <div id="recaptcha-cont"></div>
        </div>
      </div>
      <div
        className={` flex flex-wrap overflow-hidden w-[0%] md:w-[50%] lg:w-[60%] bg-purple-500  `}
      >
        {[
          images.map((im, i) => (
            <div key={i} className=" flex-grow h-[120pt] w-[240pt] ">
              <img
                src={im.download_url}
                className="  object-center"
                height={30}
              />
            </div>
          )),
        ]}
      </div>
    </div>
  );
}
