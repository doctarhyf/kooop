import rhyf from "../assets/icons/rhyf.png";
import ico1 from "../assets/airtel.png";
import ico2 from "../assets/mpesa.png";
import ico3 from "../assets/orange.png";
import koop from "../assets/koop.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MENUS = [
  { icon: ico1, text: "Info", name: "info" },
  { icon: ico2, text: "Favorites", name: "fav" },
  { icon: ico3, text: "Subscription", name: "suv" },
];

export default function PageMyAccount() {
  const [curSection, setCurSection] = useState(MENUS.name);

  function setSection(section) {
    setCurSection(section);
  }

  return (
    <div>
      <div className="   bg-gradient-to-b text-white from-[#d138fb] to-[#8d3fff] header text-center min-h-[160pt] flex flex-col gap-2 p-4  ">
        <Link to="/">
          <img src={koop} width={40} className="absolute  cursor-pointer " />
        </Link>
        <img src={rhyf} className="rounded-full mx-auto " width={80} />

        <div className="displayname">Displayname</div>
        <div className="text-sm">email@server.com</div>
      </div>

      <div className="menu max-w-[1100px]  shadow-md shadow-black/50 flex justify-around items-center min-h-[80pt] bg-white p-4 border  border-slate-200 rounded-md mx-8 md:mx-auto -mt-[20pt] ">
        {MENUS.map((m, i) => (
          <div
            onClick={(e) => setCurSection(m.name)}
            className="cursor-pointer group"
          >
            <img className="mx-auto" src={m.icon} />
            <div className="text-center text-gray-400 group-hover:text-black">
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="sec-cont bg-red-500 p-4 max-w-[1100px] mx-auto">
        {MENUS[0].name === curSection && <div>Info</div>}
        {MENUS[1].name === curSection && <div>My Favs</div>}
        {MENUS[2].name === curSection && <div>My Sub</div>}
      </div>
    </div>
  );
}
