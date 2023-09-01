import { useEffect, useRef, useState } from "react";
import rhyf from "../assets/docta.jpg";
import post from "../assets/icons/reqserv.png";
import search from "../assets/icons/search.png";
import koop from "../assets/koop.png";
import "../App2.css";
import { LoadItems } from "../db/fb";
import { AddKoop, LoadKoops } from "../db/db";

const clCard = ""; //
const clOptions =
  "shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";

export default function PageHome() {
  const [q, setq] = useState("");
  const [qfocused, setqFocused] = useState(false);
  const [mode, setMode] = useState("s");

  const refBudget = useRef();
  const refLocation = useRef();
  const refDate = useRef();
  const refFiles = [useRef(), useRef(), useRef()];

  const [showOptions, setShowOptions] = useState(false);
  const [koops, setKoops] = useState([]);

  useEffect(() => {
    loadKoops();
  }, []);

  async function loadKoops() {
    const koops = await LoadKoops();
    setKoops(koops);
    console.log(koops);
  }

  function onSetMode(m) {
    setMode(m);

    console.log("cur mode ", mode);
  }

  function onSetShowOptions(e) {
    setShowOptions(e.target.checked);
  }

  function onSearchClick(e) {
    switch (mode) {
      case "s":
        searchKoops();
        break;

      case "p":
        postKoop();
        break;
    }
  }

  function searchKoops() {
    console.log("searchKoops");
  }

  function getRefValue(ref) {
    const v = ref?.current?.value;

    return v === undefined ? "" : v;
  }

  const grv = getRefValue;

  async function postKoop() {
    let koop = {
      text: q,
      budget: grv(refBudget),
      date: grv(refDate),
      location: grv(refLocation),
      media: [grv(refFiles[0]), grv(refFiles[1]), grv(refFiles[2])],
    };
    console.log(koop);

    const res = await AddKoop(koop);

    console.log(res);
  }

  return (
    <div className=" max-w-[900px] overflow-hidden mx-auto">
      <div
        className={`cont-logo bg-sky-500 items-center flex flex-col justify-center`}
      >
        <img src={koop} width={160} />
        <p
          className={` p-2 text-center  transition-colors ease-in-out duration-150   ${
            qfocused ? "text-yellow-400" : ""
          } `}
        >
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
            className={` flex ${
              mode === "p" ? "rounded-lg" : ""
            } cont-search-input bg-sky-500 p-2 rounded-b-lg rounded-r-lg `}
          >
            <input
              onChange={(e) => setq(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") onSearchClick(null);
              }}
              className="h-[30px] outline-none px-1 flex-grow rounded-md "
              type="search"
              onFocus={(e) => setqFocused(true)}
              onBlur={(e) => setqFocused(false)}
              placeholder={` ${
                mode === "s" ? "search koops ..." : "post new koop ..."
              } `}
            />
            <span className="h-[30px] w-[30px] hover:scale-125  cursor-pointer inline-block">
              <img
                src={mode === "s" ? search : post}
                onClick={(e) => onSearchClick(e)}
                width={20}
                className="translate-x-[25%] translate-y-[25%] "
              />
            </span>
          </div>
        </section>

        {mode === "p" && (
          <section className="sect-koop-details">
            <div>
              <input
                type="checkbox"
                checked={showOptions}
                onChange={(e) => onSetShowOptions(e)}
              />
              Add options
            </div>
            {showOptions && (
              <>
                <div className={`cont-koop-det ${clOptions} `}>
                  <div className={`option-card budget  `}>
                    <div className="text-sky-600">Budget</div>

                    <input
                      ref={refBudget}
                      name="budget"
                      type="number"
                      placeholder="ex: 450"
                    />
                  </div>

                  <div className={`option-card date  `}>
                    <div className="text-sky-600">Date/Time</div>

                    <div>
                      <input ref={refDate} name="date" type="date" />
                    </div>
                  </div>

                  <div className={`option-card location  `}>
                    <div className="text-sky-600">Location</div>

                    <div>
                      <input
                        ref={refLocation}
                        placeholder="koop location ..."
                        type="text"
                        name="location_add"
                      />
                    </div>
                  </div>

                  <div className={`option-card media flex  flex-col`}>
                    <div className="text-sky-600">Media(photos/vids/links</div>
                    {[1, 2, 3].map((p, i) => (
                      <input name={`file_${i}`} ref={refFiles[i]} type="file" />
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>
        )}

        <section className="main-cont">
          {koops.map((k, i) => (
            <div className="border-sky-200 border my-2 p-2 rounded-lg hover:border-sky-500 shadow-black/10  shadow-lg hover:bg-sky-slate-200">
              <div>{k.text}</div>
              <div>{k.date}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
