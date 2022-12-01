/* 外部import */
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
      <ErrorBoundary fallback={<p>エラーです！</p>}>
        <Suspense fallback={<p>ローディング中だよ〜</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
