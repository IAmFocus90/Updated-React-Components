//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
    setMultipleSelection([]);
  };

  const handleMultipleSelection = (currentId) => {
    let newMultipleSelection = [...multipleSelection];
    // const currentIdIndex = newMultipleSelection.indexOf(currentId);
    if (!newMultipleSelection.includes(currentId)) {
      newMultipleSelection.push(currentId);
    } else {
      newMultipleSelection = newMultipleSelection.filter(
        (selection) => currentId !== selection
      );
    }

    setMultipleSelection(newMultipleSelection);
  };

  console.log(selected, multipleSelection);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable MultipleSelection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multipleSelection.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multipleSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>data not found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
