import { Outlet, Link } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { ROUTES } from "../utils/utils";
import { useState } from "react";
import { LoggedInUser } from "../db/db";

const Layout = () => {
  const [user, setUser] = useState(false);

  useState(() => {
    const curUser = LoggedInUser();

    setUser(curUser);
  }, []);

  return (
    <>
      {/* 
    // ----------- for debug purpose ------------------- */}

      <div className="dbg-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={ROUTES.MY_ACCOUNT.path}>My Account</Link>
          </li>
          <li>
            <Link to={ROUTES.LOGIN.path}>Login</Link>
          </li>
          <li>
            <Link to={ROUTES.LEGAL.path}>Legal</Link>
          </li>
          <li>
            <Link to={ROUTES.SUBCRIPTION.path}>Subscription</Link>
          </li>
          <li>
            <Link to={ROUTES.INTRO.path}>Intro</Link>
          </li>
        </ul>
      </div>

      {/* 
// ------------------------------ debug pupose end */}

      <Header user={user} />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
