import { useLocation } from "react-router-dom";
import Header from "../comp/Header";
import { PAGES, clPageStyle } from "../utils/utils";
import { useEffect, useState } from "react";
import SectionTitle from "../comp/SectionTitle";
import info from "../assets/icons/info.png";
import media from "../assets/icons/media.png";

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
  const [koop, setKoop] = useState({});

  useEffect(() => {
    const curKoop = location.state.koop;

    setKoop(curKoop);

    console.log("curKoop", curKoop);
  }, []);

  return (
    <div className={clPageStyle}>
      <div className="p-2">
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
    </div>
  );
}
