import { useEffect, useState } from "react";
import "./App2.css";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";
import { PAGES, ROUTES } from "./utils/utils";
import PageViewKoop from "./pages/PageViewKoop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMyAccount from "./pages/PageMyAccount";
import Layout from "./pages/Layout";
import PageLogin from "./pages/PageLogin";
import PageLegal from "./pages/PageLegal";
import PageSub from "./pages/PageSub";
import PageIntro from "./pages/PageIntro";
import { LoggedInUser } from "./db/db";

function App() {
  const [page, setPage] = useState(PAGES.HOME.path);
  const [curKoop, setCurKoop] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const user = LoggedInUser();
    setLoggedIn(user);
  }, []);

  return (
    <BrowserRouter basename="/kooop">
      <Routes>
        <Route path="/" element={loggedIn ? <Layout /> : <PageLogin />}>
          <Route index element={<PageHome />} />
          <Route path={ROUTES.VIEW_KOOP.path} element={<PageViewKoop />} />

          <Route path={ROUTES.LEGAL.path} element={<PageLegal />} />
          <Route path={ROUTES.SUBCRIPTION.path} element={<PageSub />} />
          {/* <Route path={ROUTES.INTRO.path} element={<PageIntro />} /> */}

          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path={ROUTES.MY_ACCOUNT.path} element={<PageMyAccount />} />
        <Route path="/intro" element={<PageIntro />} />
        <Route path={ROUTES.LOGIN.path} element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
