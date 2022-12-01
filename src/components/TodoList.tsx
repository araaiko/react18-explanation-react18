/** 外部import */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

/** 内部import */
import { sleep } from "./AlbumList";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const result = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then(await sleep(2500));
  return result.data;
}

export const TodoList: FC = () => {
  const { data } = useQuery<Todo[]>(["todos"], fetchTodos);

  return (
    <div
      style={{
        height: "300px",
        border: "2px solid gray",
        background: "mistyrose",
        overflowY: "scroll",
      }}
    >
      <h2>TODO</h2>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
