import { KOOP_OPTIONS_ICONS } from "../utils/utils";
import OptionItem from "./OptionItem";

export default function Koop({ data, onKoopClicked }) {
  const { date, budget, location, media } = data;

  return (
    <div
      onClick={(e) => onKoopClicked(data)}
      className="border-sky-100 flex flex-col gap-2 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200"
    >
      <div className=" flex gap-2 text-sm  text-gray-400">
        {budget && (
          <OptionItem text={budget + " $"} icon={KOOP_OPTIONS_ICONS.budget} />
        )}
        {date && <OptionItem text={date} icon={KOOP_OPTIONS_ICONS.date} />}
        {location && (
          <OptionItem text={location} icon={KOOP_OPTIONS_ICONS.location} />
        )}
        {media && <OptionItem text={"Media"} icon={KOOP_OPTIONS_ICONS.media} />}
      </div>

      <div>{data.text}</div>
    </div>
  );
}
