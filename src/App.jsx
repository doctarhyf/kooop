import { useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";
import { PAGES } from "./utils/utils";

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);

  function onPageChange(newPage, data) {
    console.log("newPage => ", newPage, data);
  }

  return (
    <>
      {page === PAGES.HOME.path && <PageHome onPageChange={onPageChange} />}
      {page === undefined && <PageNotFound onPageChange={onPageChange} />}
    </>
  );
}

export default App;
