/* 外部import */
import React, { Suspense } from "react";

/* 内部import */
import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { ReactQuery } from "./components/ReactQuery";
import { Transition } from "./components/Transition";

function App() {

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<p>ローディング中だよ〜</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
