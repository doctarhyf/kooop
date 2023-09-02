import {
  GRV,
  KOOP_OPTIONS_ICONS,
  PAGES,
  ROUTES,
  clPageStyle,
} from "../utils/utils";

function SubcriptionCard({ data }) {
  const { title, features, price, bg, text, outline, id } = data;

  function onSubscribe(id) {
    console.log(id);
  }

  return (
    <div
      className={`border text-center p-4 m-2 mt-8 min-w-[30%] rounded-lg text-white ${bg} `}
    >
      <div
        className={`bg-white w-fit p-2 mx-auto ${text} min-w-[100pt] text-center rounded-lg -mt-8 outline ${outline} `}
      >
        {title}
      </div>
      <div className="my-4 gap-2 flex flex-col">
        {features.map((feat, i) => (
          <div>&bull; {feat}</div>
        ))}
      </div>

      <div className="text-[40pt]">{price} FC</div>

      <button
        onClick={(e) => onSubscribe(id)}
        className={`border p-1 rounded-lg hover:bg-white/30`}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default function PageSub() {
  /*
blue-purple

yellow-pink

sky-blue */

  const subscirptionsData = [
    {
      title: "Basic",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
      price: 5000,
      bg: "bg-gradient-to-r from-blue-500 to-purple-500",
      text: "text-blue-500",
      outline: "outline-blue-500",
    },
    {
      title: "Standard",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
      price: 7500,
      bg: "bg-gradient-to-r from-orange-500 to-pink-500",
      text: "text-orange-500",
      outline: "outline-orange-500",
    },
    {
      title: "Premium",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
      price: 10000,
      bg: "bg-gradient-to-r from-sky-500 to-blue-500",
      text: "text-purple-500",
      outline: "outline-purple-500",
    },
  ];

  return (
    <div className={`  ${clPageStyle} md:flex justify-center items-center `}>
      {subscirptionsData.map((sub, i) => (
        <SubcriptionCard key={i} data={{ ...sub, id: i }} />
      ))}
    </div>
  );
}
