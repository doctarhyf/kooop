import budget from "../assets/icons/budget.png";
import date from "../assets/icons/date.png";
import location from "../assets/icons/location.png";
import media from "../assets/icons/media.png";

export function getRandomFileName() {
  var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
  var random = ("" + Math.random()).substring(2, 8);
  var random_number = timestamp + random;
  return random_number;
}

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
  HOME: { path: "/", title: "Home", showInMenu: true },
  MY_ACCOUNT: { path: "/my_acc", title: "My Account", showInMenu: true },
  VIEW_KOOP: { path: "/view", title: "Koop", showInMenu: false },
  SUBCRIPTION: { path: "/sub", title: "Subscription", showInMenu: true },
  FAV: { path: "/fav", title: "My Favorites", showInMenu: true },
  LOGIN: { path: "/login", title: "Login", showInMenu: false },
  LEGAL: { path: "/legal", title: "Legal", showInMenu: false },
  INTRO: { path: "/intro", title: "Intro", showInMenu: false },

  TEST_REC: { path: "/test_rec", title: "Test Rect", showInMenu: true },
  LOGOUT: { path: "/logout", title: "Logout", showInMenu: true },
};

export const COLLECTION_NAME = {
  KOOPS: "koops",
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
