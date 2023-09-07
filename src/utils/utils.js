import budget from "../assets/icons/budget.png";
import date from "../assets/icons/date.png";
import location from "../assets/icons/location.png";
import media from "../assets/icons/media.png";

export const KOOP_OPTIONS_ICONS = {
  budget: budget,
  date: date,
  location: location,
  media: media,
};

export const PAGES = {
  HOME: { path: "home" },
  VIEW_KOOP: { path: "viewKoop" },
};

export const ROUTES = {
  HOME: { path: "/", title: "Home" },
  MY_ACCOUNT: { path: "/my_acc", title: "My Account" },
  VIEW_KOOP: { path: "/view", title: "Koop" },
  SUBCRIPTION: { path: "/sub", title: "Subscription" },

  LOGIN: { path: "/login", title: "My Account" },
  LEGAL: { path: "/legal", title: "Koop" },
  INTRO: { path: "/intro", title: "Subscription" },

  TEST_REC: { path: "/test_rec", title: "Test Rect" },
};

/*

  <Link to={ROUTES.MY_ACCOUNT.path}>My Account</Link>
          </li>
          <li>
            <Link to={ROUTES.LOOGIN.path}>Login</Link>
          </li>
          <li>
            <Link to={ROUTES.LEGAL.path}>Legal</Link>
          </li>
          <li>
            <Link to={ROUTES.SUBCRIPTION.path}>Subscription</Link>
          </li>
          <li>
            <Link to={ROUTES.INTRO.path}>Intro</Link>

*/

export const clPageStyle =
  " max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";

function getRefValue(ref) {
  const v = ref?.current?.value;

  return v === undefined ? "" : v;
}
export const GRV = getRefValue;
