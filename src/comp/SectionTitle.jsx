import React from "react";

export default function SectionTitle({ icon, title }) {
  return (
    <div className="text-sky-600 border-t py-2 flex items-center gap-2 mb-1">
      <img src={icon} width={16} />
      <span>{title}</span>
    </div>
  );
}
