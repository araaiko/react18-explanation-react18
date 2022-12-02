/** 外部import */
import { FC, Suspense, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

/** 内部import */
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = "todo" | "album";

export const ReactQuery: FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("todo");
  const [isPending, startTransition] = useTransition();

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    opacity: isPending ? 0.5 : 1,
  };
  const todoButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "todo" ? "royalblue" : "white",
    color: selectedTab === "todo" ? "white" : "black",
  }; 
  const albumButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "album" ? "royalblue" : "white",
    color: selectedTab === "album" ? "white" : "black",
  }; 

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={todoButtonStyle}
          onClick={() => onClickTabButton("todo")}
        >
          Todo
        </button>
        <button
          style={albumButtonStyle}
          onClick={() => onClickTabButton("album")}
        >
          Album
        </button>

        <ErrorBoundary fallback={<p>Todo or AlbumListエラーです！</p>}>
          <Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
            {selectedTab === "todo" ? <TodoList /> : <AlbumList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
