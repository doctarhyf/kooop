import React, { useState } from "react";
import koop from "../assets/koop.png";
import rhyf from "../assets/docta.jpg";
import "../App2.css";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/utils";

export default function Header({ onLogoClick, small, user }) {
  return (
    <div className="header bg-sky-500 flex flex-col">
      <div
        className={`cont-logo  items-center flex
      
      ${small ? " justify-around items-center " : "flex-col justify-center  "}
      
      
      `}
      >
        <div className={`self-end m-4 ${small ? " flex-1 " : ""}  `}>
          <Link to={ROUTES.MY_ACCOUNT.path}>
            <img
              alt="My Account"
              src={rhyf}
              className="rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "
            />
          </Link>
          <div className="text-center text-sm bg-white text-sky-500 rounded-lg w-fit mx-auto px-1 my-2 ">
            <div>{user.displayname}</div>
            <div> {user.phone}</div>
          </div>
        </div>
        <Link to="/">
          <img
            className={`cursor-pointer ${small ? " flex-3 " : " -mt-[50pt] "}`}
            src={koop}
            width={small ? 160 : 100}
          />
        </Link>
        <p
          className={` p-2 text-center  transition-colors ease-in-out duration-150
          
          ${small ? "text-sm flex-1 " : ""}
          
          `}
        >
          100000 + of services and quick deals at your fingertips ...
        </p>
      </div>

      <div
        className={` gap-2 py-2 
      
      ${small ? " h-[60pt] " : " h-[80pt] "}
      
      flex overflow-x-scroll w-[100vw]`}
      >
        {[...Array(20).fill(0)].map((it, i) => (
          <div
            key={i}
            className="bg-green-200  overflow-hidden min-w-[120pt] rounded-lg   "
          >
            <img className="w-[100%]  " src={rhyf} />
          </div>
        ))}
      </div>
    </div>
  );
}
