export default function OptionItem({ icon, text }) {
  return (
    <div className="flex">
      <img src={icon} width={20} />
      <span className="text-gray-700 italic" >{text}</span>
    </div>
  );
}
