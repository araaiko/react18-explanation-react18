/* 外部import */
import React from "react";

/* 内部import */
import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";

function App() {

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;
