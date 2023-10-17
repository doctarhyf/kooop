import React, { useState } from "react";
import koop from "../assets/koop.png";
import rhyf from "../assets/docta.jpg";
import "../App2.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/utils";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Header({ onLogoClick, small, user }) {
  return (
    <div className="header bg-blue-500 flex flex-col ">
      <div
        className={`cont-logo  items-center flex
      
      ${small ? " justify-around items-center " : "flex-col justify-center  "}
      
      
      `}
      >
        <div
          className={` flex  md:max-w-[900px] px-4  items-center justify-between  w-full   m-4 ${
            small ? " flex-1 " : ""
          }  `}
        >
          <Link to="/">
            <img className={`cursor-pointer   `} src={koop} width={80} />
          </Link>

          <Menu>
            <MenuHandler>
              <div>
                <img
                  alt="My Account"
                  src={rhyf}
                  className="rounded-full w-[30pt] mx-auto hover:outline cursor-pointer hover:outline-white  "
                />
              </div>
            </MenuHandler>

            <MenuList>
              {Object.values(ROUTES).map(
                (rt, i) =>
                  rt.showInMenu && (
                    <NavLink to={rt.path}>
                      <MenuItem>{rt.title}</MenuItem>
                    </NavLink>
                  )
              )}
            </MenuList>
          </Menu>
        </div>

        <p
          className={` hidden p-2 text-center  transition-colors ease-in-out duration-150
          
          ${small ? "text-sm flex-1 " : ""}
          
          `}
        >
          100000 + of services and quick deals at your fingertips ...
        </p>
      </div>

      <div
        className={` hidden gap-2 py-2 
      
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
