import { Outlet, Link } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { ROUTES } from "../utils/utils";

const Layout = () => {
  return (
    <>
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
      <Header />
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
