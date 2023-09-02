import { useEffect, useRef, useState } from "react";
import "../App2.css";
import post from "../assets/icons/reqserv.png";
import search from "../assets/icons/search.png";
import Header from "../comp/Header";
import Koop from "../comp/Koop";
import { AddKoop, LoadKoops } from "../db/db";
import { KOOP_OPTIONS_ICONS, PAGES, clPageStyle } from "../utils/utils";
import loading from "../assets/icons/progress.gif";

const clCard = ""; //
const clOptions =
  "shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";

function OptionTitle({ icon, title }) {
  return (
    <div className="text-sky-600 border-t py-2 flex items-center gap-2 mb-1">
      <img src={icon} width={30} />
      <span>{title}</span>
    </div>
  );
}

export default function PageHome({ onPageChange }) {
  const [q, setq] = useState("");
  const [qfocused, setqFocused] = useState(false);
  const [mode, setMode] = useState("s");

  const refBudget = useRef();
  const refLocation = useRef();
  const refDate = useRef();
  const refFiles = [useRef(), useRef(), useRef()];

  const [showOptions, setShowOptions] = useState(false);
  const [koops, setKoops] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    loadKoops();
  }, []);

  async function loadKoops() {
    setFetchingData(true);
    const koops = await LoadKoops();
    setKoops(koops);
    console.log(koops);
    setFetchingData(false);
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

  function onKoopClicked(koop) {
    console.log(koop);
    onPageChange(PAGES.VIEW_KOOP.path, koop);
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
    loadKoops();
    console.log(res);
  }

  return (
    <div className={clPageStyle}>
      <main className="p-4 ">
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
                  <div className="flex">
                    <div className={`option-card budget  `}>
                      <OptionTitle
                        icon={KOOP_OPTIONS_ICONS.budget}
                        title="Budget"
                      />

                      <input
                        ref={refBudget}
                        name="budget"
                        type="number"
                        placeholder="ex: 450"
                      />
                    </div>

                    <div className={`option-card date  `}>
                      <OptionTitle
                        icon={KOOP_OPTIONS_ICONS.date}
                        title="Date"
                      />

                      <div>
                        <input
                          className="w-[100%]"
                          ref={refDate}
                          name="date"
                          type="date"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`option-card location  `}>
                    <OptionTitle
                      icon={KOOP_OPTIONS_ICONS.location}
                      title="Location"
                    />

                    <div>
                      <input
                        className="w-[100%]"
                        ref={refLocation}
                        placeholder="koop location ..."
                        type="text"
                        name="location_add"
                      />
                    </div>
                  </div>

                  <div className={`option-card media flex  flex-col`}>
                    <OptionTitle
                      icon={KOOP_OPTIONS_ICONS.media}
                      title="Media (photos/vids)"
                    />

                    <div className="flex">
                      {[1, 2, 3].map((p, i) => (
                        <input
                          name={`file_${i}`}
                          ref={refFiles[i]}
                          type="file"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        )}

        {fetchingData && (
          <div className="flex justify-center items-center gap-8 p-2 m-2">
            <img src={loading} width={60} />
            Please wait ...
          </div>
        )}

        {mode === "s" && (
          <section className="main-cont">
            {koops.map((data, i) => (
              <Koop key={i} onKoopClicked={onKoopClicked} data={data} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
