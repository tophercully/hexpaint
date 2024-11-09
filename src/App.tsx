import Page from "./components/page";
import colorData from "./data/colorData/benjamin-moore-colors.json";
function App() {
  return (
    <Page>
      <div className="flex h-full w-fit items-center justify-center">
        <h1 className="w-fit">Vite + React + TS + Tailwind + Prettier</h1>
        <div className="grid grid-cols-4 gap-4">
          {colorData.colors.map((color) => (
            <div
              key={color.label}
              className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4"
            >
              <div
                className="h-32 w-32 rounded-lg"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default App;
