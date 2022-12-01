/** 外部import */
import { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/** 内部import */
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

export const ReactQuery: FC = () => {

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<p>AlbumListエラーです！</p>}>
          <Suspense fallback={<p>AlbumListローディング中だよ〜</p>}>
            <AlbumList />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<p>TodoListエラーです！</p>}>
          <Suspense fallback={<p>TodoListローディング中だよ〜</p>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
