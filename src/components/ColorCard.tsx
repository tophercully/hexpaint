// ColorCard.tsx
import React from "react";

interface ColorCardProps {
  name: string;
  hex: string;
  label: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, hex, label }) => {
  return (
    <div className="m-2 flex w-48 flex-col gap-2 rounded-md border border-base-300 bg-base-50 p-4 shadow-md">
      <div
        className="aspect-square w-full rounded"
        style={{ backgroundColor: hex }}
      />
      <h3 className="mb-1 text-lg font-semibold">{name}</h3>
      <p className="mb-1 text-base-600">{hex}</p>
      <p className="text-base-600">{label}</p>
    </div>
  );
};

export default ColorCard;
