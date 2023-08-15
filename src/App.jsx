import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav className="flex  justify-between bg-slate-500 text-white p-4">
        <img src={viteLogo} />
        <ul className="links-cont flex  gap-4 ">
          <li>Home</li>
          <li>History</li>
          <li>Likes</li>
          <li>Account</li>
        </ul>
      </nav>

      <main>
        <div className="flex mt-8 flex-col gap-8 justify-center items-center">
          <img src={reactLogo} width={180} />

          <div className="rounded-full h-[2rem] outline outline-1">
            <input
              placeholder="search ..."
              className=" outline-none min-w-[60%]  rounded-l-full h-[2rem] outline-1 p-2 "
              type="search"
            />
            <button className=" hover:bg-sky-500 hover:text-white h-[2rem] w-[4rem] rounded-r-full">
              Q
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
