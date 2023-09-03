import { useEffect, useRef, useState } from "react";
import { LoggedInUser } from "../db/db";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/utils";
import koop from "../assets/koop.png";
import google from "../assets/icons/google.svg";
import phone from "../assets/icons/phone.svg";
import icon from "../assets/docta.jpg";

function Slider() {
  return (
    <div className=" w-[100vw] mx-auto max-w-[1100px] my-4 grid gap-1 grid-flow-col auto-cols-[150pt] snap-x scroll-p-1 snap-mandatory overflow-x-scroll  ">
      {[...Array(10).fill(icon)].map((s, i) => (
        <div className="w-[140pt] rounded-lg h-[100pt] border-0 overflow-hidden border-purple-600 bg-emerald-500/0">
          <img src={s} className="w-[100%] object-none" />
        </div>
      ))}
    </div>
  );
}

export default function PageLogin() {
  const navigate = useNavigate();
  const [curSection, setCurSection] = useState("");
  const refPhone = useRef();
  const refOTP = useRef();

  useEffect(() => {
    const user = undefined; // = { displayname: "doctarhyf", phone: "0893092849" };
    LoggedInUser();

    if (user) navigate(ROUTES.HOME.path);
  }, []);

  function onSignIn(e) {
    console.log(e);
  }

  return (
    <div className="bg-gradient-to-b from-sky-500 to-purple-700 text-center flex-col h-[100vh] flex  ">
      <div>
        <img src={koop} width={180} className="mx-auto" />
        <p>Proviter de 10000 + de services offerts </p>
      </div>

      {curSection === "" && <Slider />}

      <div>
        {curSection === "phone" && (
          <div>
            <div className="text-white">Phone</div>
            <input
              ref={refPhone}
              className="p-2 rounded-lg m-2"
              type="phone"
              placeholder="0893092849"
            />
            <div className="text-white">OTP</div>
            <input
              className="p-2 rounded-lg m-2"
              ref={refOTP}
              type="phone"
              placeholder="0893092849"
            />
            <button
              onClick={onSignIn}
              className={`bg-white mx-auto 
              hover:outline hover:outline-purple-600 md:max-w-[50%] 
              p-2 flex gap-4 rounded-lg`}
            >
              Sign In
            </button>
          </div>
        )}

        <div
          className={` max-w-[60%] mx-auto text-center flex pt-2 ${
            curSection !== "" ? "border-t border-gray-400" : ""
          } flex-col items-center justify-center mt-4 gap-4`}
        >
          {curSection !== "" && <p>OR</p>}
          {[
            { title: "Sign With Phone Number", icon: phone, section: "phone" },
            { title: "Sign In With Google", icon: google, section: "google" },
          ].map((b, i) => (
            <button
              onClick={(e) => setCurSection(b.section)}
              className={`bg-white 
              hover:outline hover:outline-purple-600 md:max-w-[50%] 
              p-2 flex gap-4 rounded-lg ${
                b.section === curSection ? " hidden " : ""
              } `}
            >
              <img src={b.icon} width={30} />
              {b.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
