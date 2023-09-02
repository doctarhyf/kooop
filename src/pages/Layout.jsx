import { Outlet, Link } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";

const Layout = () => {
  return (
    <>
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
