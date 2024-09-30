import { useState } from "react";
import { Tab } from "./tab";
import "./tabs.css"

const tabData = [
  {
    label: "Tab One",
    content: <div>This is the first Tab</div>,
  },
  {
    label: "Tab Two",
    content: <div> This is the second Tab</div>,
  },
  {
    label: "Tab Three",
    content: <div>This is Tab number Three</div>,
  },
];

export const TabsMain = () => {
  const [showIndex, setShowIndex] = useState(0);
  const handleShowTab = (currentIndex) => {
    setShowIndex(currentIndex);
    console.log(currentIndex);
  };
  return (
    <div>
      <div className="tabs-header">
        {tabData.map((tabItem, index) => (
          <Tab
            key={tabItem.label}
            tabsContent={tabItem}
            showTab={() => handleShowTab(index)}
            currIndex={index}
            showIndex={showIndex}
          />
        ))}
      </div>
      <div className="current-tab">
        <h2>{tabData[showIndex] && tabData[showIndex].content}</h2>
      </div>
    </div>
  );
};
