import { useState } from "react";

function ButtonThumb({ page, left, right, curPage, setCurPage }) {
  return (
    <div
      onClick={(e) => setCurPage(page)}
      className={` ${left ? "rounded-l-lg " : ""} ${
        right ? " rounded-r-lg " : ""
      } cursor-pointer px-1
     
     ${
       curPage === page
         ? " text-white bg-sky-500 "
         : " text-sky-500 border-sky-500 "
     }

     hover:text-white hover:bg-sky-500 border 
     text-center  `}
    >
      {page}
    </div>
  );
}

export default function Paginator({ pagesCount = 20 }) {
  const [curPage, setCurPage] = useState(1);
  const pagesMoreThan5 = pagesCount > 5;

  return (
    <div className="flex mx-auto justify-center items-center">
      <ButtonThumb page={"PREV"} left={true} />
      {[...Array(pagesCount)].slice(0, 5).map((p, i) => (
        <ButtonThumb
          key={i}
          page={i + 1}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      ))}
      ...
      <ButtonThumb
        page={pagesCount}
        curPage={curPage}
        setCurPage={setCurPage}
      />
      <ButtonThumb page={"NEXT"} right={true} />
    </div>
  );
}
