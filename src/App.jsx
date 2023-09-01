import { useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";

const PAGES = {
  HOME: { path: "home" },
};

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);

  return (
    <>
      {page === PAGES.HOME.path && <PageHome />}
      {page === undefined && <div>No Page</div>}
    </>
  );
}

export default App;
