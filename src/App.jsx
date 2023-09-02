import { useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";

const PAGES = {
  HOME: { path: "home" },
};

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);

  return (
    <>
      {page === PAGES.HOME.path && <PageHome />}
      {page === undefined && <PageNotFound />}
    </>
  );
}

export default App;
