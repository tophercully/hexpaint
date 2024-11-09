import React, { useState } from "react";
import colorData from "../data/colorData/benjamin-moore-colors.json";
import ColorCard from "./ColorCard";

const Search: React.FC = () => {
  const [hexCode, setHexCode] = useState(
    colorData.colors[Math.floor(Math.random() * colorData.colors.length - 1)]
      .hex,
  );
  const [closestColors, setClosestColors] = useState<
    { distance: number; hex: string; label: string; name: string }[]
  >([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const closestColors = findClosestColors(hexCode);
    setClosestColors(closestColors);
    console.log("Closest colors updated:", closestColors);
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
    return distances.slice(0, 10);
  };

  const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

  return (
    <div className="flex w-full flex-col items-center gap-8 p-4">
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
          className="rounded bg-base-600 p-2 text-white hover:bg-base-800"
        >
          Search
        </button>
      </form>
      <div
        className={`flex w-full flex-col items-center gap-16 overflow-hidden pb-4 duration-1000 ease-in ${
          closestColors.length > 0 ? "max-h-[5000px]" : "max-h-0"
        }`}
      >
        <div className="w-fit">
          <h3 className="text-medium w-full py-2 text-xl">
            {`"${closestColors[0]?.name}" is the closest Benjamin Moore paint color to ${hexCode.toUpperCase()}.`}
          </h3>
          <ColorCard
            key={0}
            name={closestColors[0]?.name}
            hex={closestColors[0]?.hex}
            label={closestColors[0]?.label}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-medium w-full py-2 text-xl">
            10 closest Benjamin Moore paint colors to {hexCode.toUpperCase()}.
          </h3>
          <div className="grid w-full grid-cols-2 justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
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
      </div>
    </div>
  );
};

export default Search;
