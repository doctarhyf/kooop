import { useState } from "react";

function ButtonThumb({ btnName, left, right, curPage, onThumbClick }) {
  return (
    <div
      onClick={(e) => {
        console.log(btnName, curPage, btnName === curPage);
        //onThumbClick(btnName);
      }}
      className={` ${left ? "rounded-l-lg " : ""} ${
        right ? " rounded-r-lg " : ""
      } cursor-pointer px-1
     
     ${
       Number(curPage) === Number(btnName)
         ? " text-white bg-sky-500 "
         : " text-sky-500 border-sky-500 "
     }

     hover:text-white hover:bg-sky-500 border 
     text-center  `}
    >
      {btnName}
    </div>
  );
}

export default function Paginator({ pagesCount = 20 }) {
  const [curPage, setCurPage] = useState(1);
  const pagesMoreThan5 = pagesCount > 5;

  function onThumbClick(btnName) {
    console.log(btnName);

    switch (btnName) {
      case "PREV":
        setCurPage(curPage - 1);
        break;

      case "NEXT":
        setCurPage(curPage + 1);
        break;

      default:
        setCurPage(Number(curPage));
        break;
    }
  }

  return (
    <div className="flex mx-auto justify-center items-center">
      <ButtonThumb btnName={"PREV"} left={true} onThumbClick={onThumbClick} />
      {[...Array(pagesCount)].slice(0, 5).map((p, i) => (
        <ButtonThumb
          key={i}
          btnName={Number(i) + 1}
          curPage={Number(curPage)}
          onThumbClick={onThumbClick}
        />
      ))}
      ...
      <ButtonThumb
        btnName={Number(pagesCount)}
        curPage={Number(curPage)}
        onThumbClick={onThumbClick}
      />
      <ButtonThumb btnName={"NEXT"} right={true} onThumbClick={onThumbClick} />
    </div>
  );
}
