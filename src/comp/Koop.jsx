import React from "react";

export default function Koop({ data, onKoopClicked }) {
  return (
    <div
      onClick={(e) => onKoopClicked(data)}
      className="border-sky-100 cursor-pointer border my-2 p-2 rounded-lg hover:border-green-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200"
    >
      <div className="text-sm">
        <span className="text-green-500 font-bold">
          {data.date && data.date + " / "}
          {data.location && " " + data.location}
          {data.budget && " / for " + data.budget + " $"}
        </span>
      </div>

      <div>{data.text}</div>
    </div>
  );
}
