import "./App.css";
import { TabsMain } from "./components/Tabs-feature/tabs-main";
// import { LightDarkTheme } from "./components/light-dark-theme-hook";
// import { QRCodeGenerator } from "./components/qr-code-generator";
// import { ScrollIndicator } from "./components/scroll-indicator";
// import { ImageSlider } from "./components/image-slider";
// import LoadMOreData from "./components/load-more-data";
// import TreeViewMenu from "./components/tree-view-menu";
// import menus from "./components/tree-view-menu/data";
// import Accordian from "./components/arccodian";
// import RandomColor from "./components/Random-color";
// import { StarRating } from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* accordian component */}
      {/* <Accordian /> */}

      {/* random-color component */}
      {/* <RandomColor /> */}

      {/* star-rating component */}
      {/* <StarRating /> */}

      {/* image-slider component */}
      {/* <ImageSlider
        imageUrl={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* load more data component */}
      {/* <LoadMOreData /> */}

      {/* tree view component */}
      {/* <TreeViewMenu menu={menus} /> */}

      {/* QRCode Generator Component */}
      {/* <QRCodeGenerator /> */}

      {/* light or dark theme mode */}
      {/* <LightDarkTheme /> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={"https://
      dummyjson.com/products?limit=100"} /> */}

      {/* tabs switch component */}
      <TabsMain />
    </div>
  );
}

export default App;
