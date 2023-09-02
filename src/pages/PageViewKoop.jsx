import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import info from "../assets/icons/info.png";
import media from "../assets/icons/media.png";
import SectionTitle from "../comp/SectionTitle";
import { ROUTES, clPageStyle } from "../utils/utils";
import budget from "../assets/icons/budget.png";
import date from "../assets/icons/date.png";
import loc from "../assets/icons/location.png";

function Section({ icon, title, children, small }) {
  return (
    <div>
      <SectionTitle title={title} icon={icon} />
      <div className="p-2">{children}</div>
    </div>
  );
}

function clBtn(color) {
  const colors = {
    green: {
      bg: "bg-green-500",
      border: "border-green-500",
      text: "text-green-500",
      hover: {
        bg: "bg-green-600",
      },
    },
    yellow: {
      bg: "bg-yellow-500",
      border: "border-yellow-500",
      text: "text-yellow-500",
      hover: {
        bg: "bg-yellow-600",
      },
    },
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-500",
      hover: {
        bg: "bg-blue-600",
      },
    },
    red: {
      bg: "bg-red-500",
      border: "border-red-500",
      text: "text-red-500",
      hover: {
        bg: "bg-red-600",
      },
    },
  };

  let cl = `text-sm border ${colors[color].border} p-1 ${colors[color].text} rounded-lg hover:bg-green-500 hover:text-white`;

  return cl;
}

export default function PageViewKoop({ onPageChange }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [koop, setKoop] = useState({});

  useEffect(() => {
    const curKoop = location.state.koop;

    setKoop(curKoop);

    console.log("curKoop", curKoop);
  }, []);

  function onAddKoopToFav() {
    console.log("current fav => ", koop);

    alert("added to fav");
  }

  return (
    <div className={`${clPageStyle} p-4 `}>
      <div className="btns-cont p-2 flex flex-col md:flex-row gap-4">
        <budget
          onClick={(e) => navigate(ROUTES.HOME.path)}
          className={clBtn("green")}
        >
          HOME
        </budget>
        <button className={clBtn("green")}>Contact Info</button>
        <button onClick={(e) => onAddKoopToFav()} className={clBtn("yellow")}>
          FAV
        </button>
        <button className={clBtn("yellow")}>SHARE</button>
        <button className={clBtn("yellow")}>REPORT</button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="cont flex-1">
          <Section title={"Description"} icon={info}>
            <p>{koop.text}</p>
          </Section>

          {koop.budget?.length > 0 && (
            <Section title={"Budjet"} icon={budget}>
              <p>{koop.budget} $</p>
            </Section>
          )}

          {koop.date?.length > 0 && (
            <Section title={"Date"} icon={date}>
              <p>{koop.text}</p>
            </Section>
          )}

          {koop.location?.length > 0 && (
            <Section title={"Location"} icon={loc}>
              <p>{koop.text}</p>
            </Section>
          )}

          {koop.media?.size > 0 && (
            <Section title={"Media"} icon={media}>
              <p>{JSON.stringify(koop.media)}</p>
            </Section>
          )}
        </div>

        <div className="ad-space md:w-[140px] bg-slate-400 min-h-[120pt] md:min-h-[240pt]">
          ad-space
        </div>
      </div>
    </div>
  );
}
