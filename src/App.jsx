import { useEffect, useState } from "react";
import koop from "../assets/koop.png";
import { GenKoop } from "./utils/utils";
import { AddKoop, LoadItems, SaveItem } from "./db/db";
import { v4 as uuidv4 } from "uuid";
import rhyf from "../assets/docta.jpg";
import "./App2.css";

const clCard =
  "shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";

function App() {
  const [mode, setMode] = useState("s");
  const [koopOptions, setKoopOptions] = useState({
    budget: undefined,
    date: undefined,
    location: undefined,
    media: undefined,
  });
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {}, []);

  function onSetMode(m) {
    setMode(m);

    console.log("cur mode ", mode);
  }

  function onSetKoopOption(e) {
    const optName = e.target.name;
    const checked = e.target.checked;

    setKoopOptions((old) => ({ ...koopOptions, [optName]: {} }));

    switch (optName) {
      case "budget":
        console.log("working on ... ", optName);
        break;

      case "date":
        console.log("working on ... ", optName);
        break;

      case "location":
        console.log("working on ... ", optName);
        break;

      case "media":
        console.log("working on ... ", optName);
        break;
    }

    if (checked === false)
      setKoopOptions((old) => ({ ...old, [optName]: undefined }));
  }

  return (
    <div className="">
      <div className="cont-logo bg-sky-500 items-center flex flex-col justify-center">
        <img src={koop} width={160} />
        <p className=" p-2 font-thin italic">
          100000 + of services and quick deals at your fingertips ...
        </p>
      </div>

      <div className=" gap-2 py-2 h-[80pt] flex overflow-x-scroll w-[100vw]">
        {[...Array(20).fill(0)].map((it, i) => (
          <div className="bg-green-200 overflow-hidden object-cover min-w-[120pt] rounded-lg   ">
            <img className="w-[100%]" src={rhyf} />
          </div>
        ))}
      </div>

      <main className="p-4">
        <section className="sect-search">
          <div className="cont-search-mode">
            <button
              className={`${
                mode === "s" ? " bg-sky-500 text-white " : "  "
              } hover:bg-sky-500 hover:text-white  p-1 rounded-t-lg `}
              onClick={(e) => onSetMode("s")}
            >
              Search
            </button>
            <button
              className={`  ${
                mode === "p" ? " bg-sky-500 text-white " : ""
              }  p-1 hover:bg-sky-500 hover:text-white rounded-t-lg`}
              onClick={(e) => onSetMode("p")}
            >
              Post
            </button>
          </div>
          <div
            className={` ${
              mode === "p" ? "rounded-lg" : ""
            } cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `}
          >
            <input
              type="search"
              placeholder={` ${
                mode === "s" ? "search koops ..." : "post new koop ..."
              } `}
            />
            <span>Q</span>
          </div>
        </section>

        {mode === "p" && (
          <section className="sect-koop-details">
            <div>
              <input
                type="checkbox"
                onChange={(e) => setShowOptions(e.target.checked)}
              />
              Add options
            </div>
            {showOptions && (
              <div className="cont-titls-koop-det my-2 bg-slate-300 p-2   rounded-lg ">
                <span>
                  <input
                    name="budget"
                    onChange={(e) => onSetKoopOption(e)}
                    type="checkbox"
                  />
                  Budget
                </span>

                <span>
                  <input
                    name="date"
                    onChange={(e) => onSetKoopOption(e)}
                    type="checkbox"
                  />
                  Date
                </span>
                <span>
                  <input
                    name="location"
                    onChange={(e) => onSetKoopOption(e)}
                    type="checkbox"
                  />
                  Location
                </span>
                <span>
                  <input
                    name="media"
                    onChange={(e) => onSetKoopOption(e)}
                    type="checkbox"
                  />
                  Media (Photos/Videos/Link)
                </span>
              </div>
            )}

            <div className={`cont-koop-det  `}>
              {koopOptions.budget && (
                <div className={`option-card budget ${clCard} `}>
                  <div className="text-sky-600">Budget</div>
                  <div>
                    <div>
                      From:
                      <input type="number" placeholder="ex: 200" />
                    </div>
                    <div>
                      To:
                      <input type="number" placeholder="ex: 450" />
                    </div>
                  </div>
                </div>
              )}

              {koopOptions.date && (
                <div className={`option-card date ${clCard} `}>
                  <div className="text-sky-600">Date/Time</div>
                  <div>
                    <input name="date" type="radio" /> Today (
                    {new Date().toISOString()})
                  </div>
                  <div>
                    <input name="date" type="radio" /> On
                    <input type="datetime-local" />
                  </div>
                </div>
              )}

              {koopOptions.location && (
                <div className={`option-card location ${clCard} `}>
                  <div className="text-sky-600">Location</div>
                  <div>
                    <input type="radio" name="add" />
                    My Home address
                  </div>
                  <div>
                    <div>
                      <input type="radio" name="add" />
                      Other
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              )}

              {koopOptions.media && (
                <div className={`option-card media flex ${clCard} flex-col`}>
                  <div className="text-sky-600">Media(photos/vids/links</div>
                  {[1, 2, 3].map((p, i) => (
                    <input name={`file_${i}`} type="file" />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="main-cont">Koops here ...</section>
      </main>
    </div>
  );
}

export default App;