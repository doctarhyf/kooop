import { useEffect, useState } from "react";
import koop from "../assets/koop.png";
import { GenKoop } from "./utils/utils";
import { AddKoop, LoadItems, SaveItem } from "./db/db";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [q, setq] = useState("");
  const [koops, setKoops] = useState([]);
  const [koopsFiltered, setKoopsFiltered] = useState([]);
  const [qmode, setqMode] = useState("post");

  useEffect(() => {
    console.log(uuidv4(), uuidv4());

    loadKoops();

    async function loadKoops() {
      const koops = await LoadItems();
      setKoops(koops);
      console.log(koops);
      //console.log(koops.map((k, i) => ( { ...koop, date: new Date(k.date.seconds) } ) );
    }
  }, []);

  function onSearch(e) {
    let q = e.target.value;

    setq(q);
    // console.log(koops.map((it, x) => it.text.legnth > 0));
  }

  async function addq(s) {
    if (qmode === "post") {
      let newKoop = GenKoop(s, false, new Date());

      setKoops((old) => [...koops, newKoop]);

      let res = await AddKoop(newKoop);
      console.log(SaveItem("add", res, newKoop));

      setq("");
    }
  }

  return (
    <div className="bg-sky-500 flex flex-col items-center h-[100vh]">
      <div>{qmode}</div>
      <div>
        <img src={koop} />

        <div>
          <div>
            <button name="search" onClick={(e) => setqMode(e.target.name)}>
              Search
            </button>
            <button name="post" onClick={(e) => setqMode(e.target.name)}>
              Post
            </button>
          </div>
          <div className="cont-search">
            <input
              onKeyUp={(e) => {
                e.keyCode === 13 && addq(e.target.value);
              }}
              value={q}
              onChange={onSearch}
              type="text"
              placeholder="search"
            />

            <div>
              <input type="checkbox" />
              Budget
              <input type="checkbox" />
              Date
            </div>
            {qmode === "post" && <button onClick={(e) => addq(q)}>POST</button>}
          </div>
        </div>
      </div>
      {qmode /* === "search" */ && (
        <div>
          {koops.reverse().map((it, i) => (
            <div
              key={i}
              className="p-1 group cursor-pointer hover:bg-white hover:text-sky-500"
            >
              <div>
                <div>{it.text}</div>
                <div className="text-sm group-hover:text-black text-white/50">
                  {it.date.toString()}
                </div>
              </div>
              <div className="group-hover:visible invisible">
                <button>Contact</button>
                <button>Add to Fav</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
