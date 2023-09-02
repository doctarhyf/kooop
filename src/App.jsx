import { useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";
import { PAGES, ROUTES } from "./utils/utils";
import PageViewKoop from "./pages/PageViewKoop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMyAccount from "./pages/PageMyAccount";
import Layout from "./pages/Layout";

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);
  const [curKoop, setCurKoop] = useState({});

  /* return (
    <>
      {page === PAGES.VIEW_KOOP.path && (
        <PageViewKoop onPageChange={onPageChange} koop={curKoop} />
      )}
      {page === PAGES.HOME.path && <PageHome onPageChange={onPageChange} />}
      {page === undefined && <PageNotFound onPageChange={onPageChange} />}
    </>
  ); */

  return (
    <BrowserRouter basename="/kooop">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path={ROUTES.VIEW_KOOP.path} element={<PageViewKoop />} />
          <Route path={ROUTES.MY_ACCOUNT.path} element={<PageMyAccount />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
