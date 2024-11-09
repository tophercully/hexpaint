// Search.tsx
import React, { useState } from "react";
import colorData from "../data/colorData/benjamin-moore-colors.json";
import ColorCard from "./ColorCard";

const Search: React.FC = () => {
  const [hexCode, setHexCode] = useState("");
  const [closestColors, setClosestColors] = useState<
    { distance: number; hex: string; label: string; name: string }[]
  >([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const closestColors = findClosestColors(hexCode);
    setClosestColors(closestColors);
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const colorDistance = (
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number },
  ) => {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2),
    );
  };

  const findClosestColors = (hex: string) => {
    const inputColor = hexToRgb(hex);
    const distances = colorData.colors.map((color) => {
      const colorRgb = hexToRgb(color.hex);
      return {
        ...color,
        distance: colorDistance(inputColor, colorRgb),
      };
    });
    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, 5);
  };

  const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="mb-8 w-fit"
      >
        <div
          id="color-preview"
          className="mb-4 aspect-square w-full rounded-md p-2 text-center"
          style={{ backgroundColor: isValidHex(hexCode) ? hexCode : "#000000" }}
        />
        <input
          type="text"
          value={hexCode}
          onChange={(e) => setHexCode(e.target.value)}
          placeholder="Enter hex code (e.g. #FF0000)"
          className="mr-2 max-w-[10ch] rounded border border-base-300 p-2"
        />
        <button
          type="submit"
          className="rounded bg-base-600 p-2 text-white"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-4">
        {closestColors.map((color, index) => (
          <ColorCard
            key={index}
            name={color.name}
            hex={color.hex}
            label={color.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
