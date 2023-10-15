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
        Menu Item
      </div>

      <div className=" flex flex-col md:flex-row">
        <div className="cont flex-1  "  >
          <Section title={"Description"} icon={info}>
            <p>{koop.text}</p>
          </Section>

        <div className=" rounded-md  space-x-4 flex border border-gray-400 p-2 " >

          {koop.budget?.length > 0 && (
            <Section title={"Budjet"} icon={budget}>
              <p>{koop.budget} $</p>
            </Section>
          )}

          {koop.date?.length > 0 && (
            <Section title={"Date"} icon={date}>
              <p>{koop.date}</p>
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

        </div>

        <div className="ad-space md:w-[140px] bg-gray-400 min-h-[120pt] md:min-h-[240pt]">
          ad-space
        </div>
      </div>
    </div>
  );
}
