import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
// import "./App.css";

function App() {
  const [selectedBackgroundColor, setBackgroundColor] =
    useState<string>("rgb(65, 61, 61)");

  const onBackgroundChange = (color: string): any => {
    setBackgroundColor(color);
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id || 0, color as string);
        }
      );
  };

  const debounceSetBackgroundColor = useCallback(
    (color: string) => debounce(onBackgroundChange(color), 250),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSetBackgroundColor(e.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: selectedBackgroundColor }}>
      <div>
        <input type="color" onChange={onChange} />
        <label>{selectedBackgroundColor}</label>
      </div>
    </div>
  );
}

export default App;
