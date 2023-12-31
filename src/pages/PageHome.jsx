import { useEffect, useRef, useState } from "react";
import "../App2.css";
import post from "../assets/icons/send.svg";
import search from "../assets/icons/seach.svg";
import Header from "../comp/Header";
import Koop from "../comp/Koop";
import { AddKoop, LoadKoops } from "../db/db";
import LoadError from "../comp/LoadError";
import MyImageGallery from "../comp/MyImageGallery";
import {
  GRV,
  KOOP_OPTIONS_ICONS,
  PAGES,
  ROUTES,
  clPageStyle,
} from "../utils/utils";
import loading from "../assets/icons/progress.gif";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../comp/SectionTitle";
import { Chip } from "@material-tailwind/react";
import "../App.css";
import { Visibility } from "@mui/icons-material";

const clCard = ""; //
const clOptions =
  "shadow-lg shadow-black/20 p-2 border border-slate-300 rounded-lg mb-4";

const colors = {
  blue: ["text-blue-500", "hover:bg-blue-500"],
  red: ["text-red-500", "hover:bg-red-500"],
  green: ["text-green-500", "hover:bg-green-500"],
  amber: ["text-amber-500", "hover:bg-amber-500"],
  pink: ["text-pink-500", "hover:bg-pink-500"],
  indigo: ["text-indigo-500", "hover:bg-indigo-500"],
  purple: ["text-purple-500", "hover:bg-purple-500"],
  teal: ["text-teal-500", "hover:bg-teal-500"],
  cyan: ["text-cyan-500", "hover:bg-cyan-500"],
};

export default function PageHome({}) {
  const [q, setq] = useState("");
  const [qfocused, setqFocused] = useState(false);
  const [mode, setMode] = useState("s");

  const refBudget = useRef();
  const refLocation = useRef();
  const refDate = useRef();
  const refFiles = [useRef(), useRef(), useRef()];

  const [showOptions, setShowOptions] = useState(false);
  const [koops, setKoops] = useState([]);
  const [koopsf, setkoopsf] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    loadKoops();
  }, []);

  async function loadKoops() {
    setKoops([]);
    setkoopsf([]);
    setLoadError(false);
    setFetchingData(true);

    try {
      const koops = await LoadKoops();
      setKoops(koops);
      setkoopsf(koops);
      console.log(koops);
      setFetchingData(false);
    } catch (e) {
      setLoadError(e);
      setLoadError(e.toString());
    } finally {
      console.log("done");
      setFetchingData(false);
    }
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

  const navigate = useNavigate();

  function onKoopClicked(koop) {
    // UpdateItem();

    navigate(ROUTES.VIEW_KOOP.path, { state: { koop: koop } });
  }

  async function postKoop() {
    let koop = {
      text: q,
      budget: GRV(refBudget),
      date: GRV(refDate),
      location: GRV(refLocation),
      media: [GRV(refFiles[0]), GRV(refFiles[1]), GRV(refFiles[2])],
    };
    console.log(koop);

    const res = await AddKoop(koop);
    loadKoops();
    console.log(res);
  }

  function searchq(q) {
    const f = koops.filter((k, i) =>
      k.text.toLowerCase().includes(q.toLowerCase())
    );

    setkoopsf(f);
  }

  return (
    <div className={clPageStyle}>
      <main className="p-4 ">
        <div
          className={`border ${
            qfocused ? "hidden" : "visible"
          } transition  duration-[2500] ease-in-out   `}
        >
          <MyImageGallery />
        </div>

        <section className="sect-search">
          <div className="cont-search-mode">
            <button
              className={`${
                mode === "s" ? " bg-blue-500 text-white " : "  "
              } hover:bg-blue-500 hover:text-white  p-1 rounded-t-lg `}
              onClick={(e) => onSetMode("s")}
            >
              Search
            </button>
            <button
              className={`  ${
                mode === "p" ? " bg-blue-500 text-white " : ""
              }  p-1 hover:bg-blue-500 hover:text-white rounded-t-lg`}
              onClick={(e) => onSetMode("p")}
            >
              Post
            </button>
          </div>
          <div
            className={` flex ${
              mode === "p" ? "rounded-lg" : ""
            } cont-search-input border border-blue-500 p-2 rounded-b-lg rounded-r-lg `}
          >
            <input
              onChange={(e) => setq(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") onSearchClick(null);
                searchq(e.target.value);
              }}
              className="h-[30px]  outline-none p-2 flex-grow rounded-md "
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
          <section className="sect-koop-details py-4">
            <div className="pb-4">
              <div>Add Tags</div>
              <div className=" tags px-1 flex flex-wrap md:flex-nowrap py-2 gap-2 overflow-scroll scroll-smooth">
                {Object.entries(colors).map((c, i) => (
                  <button
                    key={i}
                    className={` ${c[1][0]} outline py-1 outline-1 text-sm font-bold ${c[1][1]} hover:text-white px-3 rounded-lg`}
                  >
                    {c[0]}
                  </button>
                ))}{" "}
              </div>
            </div>

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
                      <SectionTitle
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
                      <SectionTitle
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
                    <SectionTitle
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
                    <SectionTitle
                      icon={KOOP_OPTIONS_ICONS.media}
                      title="Media (photos/vids)"
                    />

                    <div className="">
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

        <LoadError msg={loadError} error={loadError} />

        {mode === "s" && !qfocused && (
          <div>
            <section className=" flex flex-col md:flex-row flex-wrap ">
              {koopsf.map((data, i) => (
                <Koop
                  key={i}
                  onKoopClicked={(e) => onKoopClicked(data)}
                  data={data}
                />
              ))}
            </section>
          </div>
        )}

        {mode === "s" && qfocused && (
          <div className="text-center text-gray-400">
            Search koops 1000 + merch and services ...
          </div>
        )}
      </main>
    </div>
  );
}
