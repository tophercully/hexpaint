export type ColorEntry = {
  name: string;
  colorCode?: string;
  hex: string;
  rgb: string;
};

function parseCSV(csv: string): ColorEntry[] {
  const lines = csv.trim().split("\n"); // Split by new lines
  const result: ColorEntry[] = [];

  // Skip the header row and loop through the remaining lines
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    // Split line by semicolon delimiter and remove quotes
    const parts = line
      .split(";")
      .map((part) => part.replace(/['"]+/g, "").trim());

    // Check if we have the correct number of columns
    if (parts.length === 4) {
      const [name, colorCode, hex, rgb] = parts;

      // Add entry to result array
      result.push({
        name,
        colorCode: colorCode || undefined,
        hex,
        rgb,
      });
    }
  }

  return result;
}

// Example usage
const csvData = `
  "Color Name";"ColorCode";"Hex";"RGB"
  "Frostine";"AF-5";"#EFF2EC";"rgb(239, 242, 236)"
  "Gardenia";"AF-10";"#F4F1EA";"rgb(244, 241, 234)"
  "Steam";"AF-15";"#F1F0E7";"rgb(241, 240, 231)"
  "Mascarpone";"AF-20";"#F9F8E9";"rgb(249, 248, 233)"
  "Paper";"AF-25";"#F1F1E4";"rgb(241, 241, 228)"
  "Deep";"AF-30";"#EFEDDC";"rgb(239, 237, 220)"
  "Vapor";"AF-35";"#F0EDE0";"rgb(240, 237, 224)"
  "Lychee";"AF-40";"#F6EDDD";"rgb(246, 237, 221)"
  "Collector's";"AF-45";"#F2EBDD";"rgb(242, 235, 221)"
  "Etiquette";"AF-50";"#E6E1D6";"rgb(230, 225, 214)"
  "Sonnet";"AF-55";"#E4DCCE";"rgb(228, 220, 206)"
  `;

console.log(parseCSV(csvData));

export default parseCSV;
