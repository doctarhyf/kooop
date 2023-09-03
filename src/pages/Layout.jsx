import { Outlet, Link } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { ROUTES } from "../utils/utils";
import { useState } from "react";
import { LoggedInUser } from "../db/db";
import DebugMenu from "../comp/DebugMenu";

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

      <DebugMenu />

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
