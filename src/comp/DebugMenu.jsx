import { Link } from "react-router-dom";
import { ROUTES } from "../utils/utils";

export default function DebugMenu() {
  return (
    <div className="dbg-links ">
      <p>------ DEBUG MENU -----</p>
      <ul className="flex gap-2 justify-center items-center">
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
        <li>
          <Link to={ROUTES.TEST_REC.path}>Test</Link>
        </li>
      </ul>
      <p>------ DEBUG MENU -----</p>
    </div>
  );
}
