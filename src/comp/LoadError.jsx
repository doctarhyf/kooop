import erroricon from "../assets/icons/error.png";

export default function loadError({ msg, error }) {
  return (
    <div>
      {error && (
        <>
          <div className="flex justify-center m-4 gap-4">
            <img src={erroricon} width={60} />
          </div>
          <p className="text-center">{msg}</p>
        </>
      )}
    </div>
  );
}
