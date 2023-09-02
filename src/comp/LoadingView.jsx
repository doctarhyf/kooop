import progress from "../assets/icons/progress.gif";

export default function LoadingView({ msg, loading }) {
  return (
    <div className="flex justify-center items-center gap-8 p-2 m-2">
      <img src={progress} width={60} />
      Please wait ...
    </div>
  );
}
