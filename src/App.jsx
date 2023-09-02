import { useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";
import { PAGES } from "./utils/utils";
import PageViewKoop from "./pages/PageViewKoop";

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);
  const [curKoop, setCurKoop] = useState({});

  function onPageChange(newPage, data) {
    console.log("newPage => ", newPage, data);
    setPage(PAGES.VIEW_KOOP.path);
    if (newPage === PAGES.VIEW_KOOP.path) setCurKoop(data);
  }

  return (
    <>
      {page === PAGES.VIEW_KOOP.path && (
        <PageViewKoop onPageChange={onPageChange} koop={curKoop} />
      )}
      {page === PAGES.HOME.path && <PageHome onPageChange={onPageChange} />}
      {page === undefined && <PageNotFound onPageChange={onPageChange} />}
    </>
  );
}

export default App;
