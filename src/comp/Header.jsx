import React, { useState } from "react";
import koop from "../assets/koop.png";
import rhyf from "../assets/docta.jpg";
import "../App2.css";

export default function Header({ onLogoClick, small }) {
  return (
    <div className="header bg-sky-500">
      <div
        className={`cont-logo  items-center flex
      
      ${small ? " justify-around " : "flex-col justify-center"}
      
      
      `}
      >
        <img
          className="cursor-pointer"
          onClick={(e) => {
            window.location.reload();
          }}
          src={koop}
          width={small ? 160 : 100}
        />
        <p
          className={` p-2 text-center  transition-colors ease-in-out duration-150   `}
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
