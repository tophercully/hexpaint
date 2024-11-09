import Page from "./components/page";
import Search from "./components/Search";
import colorData from "./data/colorData/benjamin-moore-colors.json";
function App() {
  return (
    <Page>
      <div className="flex h-full w-fit items-center justify-center">
        <Search />
      </div>
    </Page>
  );
}

export default App;
