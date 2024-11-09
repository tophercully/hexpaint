// ColorCard.tsx
import { Copy } from "lucide-react";
import React from "react";
import { useNotif } from "../contexts/NotificationContext";

interface ColorCardProps {
  name: string;
  hex: string;
  label: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, hex, label }) => {
  const { showNotif } = useNotif();
  const copyItem = (item: string) => {
    navigator.clipboard.writeText(item);
    showNotif("Copied to clipboard", "info", 2000, false);
  };

  const openColorLink = () => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    const url = `https://www.benjaminmoore.com/en-us/paint-colors/color/${label}/${formattedName}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-md border-base-300 bg-base-50 shadow-lg duration-200 hover:scale-[101%]">
      <div
        className="aspect-video w-full cursor-pointer"
        style={{ backgroundColor: hex }}
        onClick={openColorLink}
      />
      <div className="flex flex-col gap-2 p-4">
        <span className="flex gap-2">
          <h3 className="mb-1 text-lg font-semibold">{name}</h3>
          <Copy
            onClick={() => copyItem(name)}
            className="h-full cursor-pointer p-1 text-base-150 hover:text-base-400"
          />
        </span>
        <span className="flex gap-2">
          <p className="mb-1 text-base-600">{hex ? hex.toUpperCase() : hex}</p>
          <Copy
            onClick={() => copyItem(hex)}
            className="h-full cursor-pointer p-1 text-base-150 hover:text-base-400"
          />
        </span>
        <span className="flex gap-2">
          <p className="text-base-600">{label}</p>
          <Copy
            onClick={() => copyItem(label)}
            className="h-full cursor-pointer p-1 text-base-150 hover:text-base-400"
          />
        </span>
      </div>
    </div>
  );
};

export default ColorCard;
