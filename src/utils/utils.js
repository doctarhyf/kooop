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
  VIEW_KOOP: { path: "/view", title: "Koop" },
  MY_ACCOUNT: { path: "/my_acc", title: "My Account" },
  SUBCRIPTION: { path: "/sub", title: "Subscription" },
};

export const clPageStyle =
  " max-w-[900px] overflow-hidden mx-auto min-h-[320pt]";

function getRefValue(ref) {
  const v = ref?.current?.value;

  return v === undefined ? "" : v;
}
export const GRV = getRefValue;
