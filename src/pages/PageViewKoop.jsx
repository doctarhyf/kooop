import Header from "../comp/Header";
import { PAGES, clPageStyle } from "../utils/utils";

export default function PageViewKoop({ koop, onPageChange }) {
  function onLogoClick(e) {
    onPageChange(PAGES.HOME.path, null);
  }

  return (
    <div className={clPageStyle}>
      <Header onLogoClick={onLogoClick} />
      View koop
      <div>{JSON.stringify(koop)}</div>
    </div>
  );
}
