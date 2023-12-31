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
    <div className=" ">
      <DebugMenu />

      <Header user={user} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
