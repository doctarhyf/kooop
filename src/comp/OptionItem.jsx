export default function OptionItem({ icon, text }) {
  return (
    <div className="flex">
      <img src={icon} width={20} />
      <span>{text}</span>
    </div>
  );
}
