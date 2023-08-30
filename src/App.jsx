import { useEffect, useState } from "react";
import koop from "../assets/koop.png";
import { GenKoop } from "./utils/utils";
import { AddKoop, LoadItems, SaveItem } from "./db/db";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [mode, setMode] = useState("s");
  const [koopOptions, setKoopOptions] = useState({
    budget: undefined,
    date: undefined,
    location: undefined,
    media: undefined,
  });

  useEffect(() => {}, []);

  function onSetMode(m) {
    setMode(m);

    console.log("cur mode ", mode);
  }

  function onSetKoopOption(e) {
    console.log(e);
  }

  return (
    <div className="">
      <div className="cont-logo bg-sky-500 flex justify-center">
        <img src={koop} />
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

        <section className="sect-koop-details">
          <div className="cont-titls-koop-det">
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
                name="budget"
                onChange={(e) => onSetKoopOption(e)}
                type="checkbox"
              />
              Date
            </span>
            <span>
              <input
                name="budget"
                onChange={(e) => onSetKoopOption(e)}
                type="checkbox"
              />
              Location
            </span>
            <span>
              <input
                name="budget"
                onChange={(e) => onSetKoopOption(e)}
                type="checkbox"
              />
              Media (Photos/Videos/Link)
            </span>
          </div>

          <div className="cont-koop-det">
            {koopOptions.budget && (
              <div className="option-card budget">
                <div>Budget</div>
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
              <div className="option-card date">
                <div>Date/Time</div>
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
              <div className="option-card location">
                <div>Location</div>
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
              <div className="option-card media flex flex-col">
                <div>Media(photos/vids/links</div>
                {[1, 2, 3].map((p, i) => (
                  <input name={`file_${i}`} type="file" name={`pic_${i}`} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
