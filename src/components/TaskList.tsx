/** 外部import */
import { FC, memo, useDeferredValue } from "react"

/** 内部import */
import type { Task } from "./Transition";

type Props = {
  taskList: Task[];
}

export const TaskList: FC<Props> = memo((props) => {
  const { taskList } = props;

  const deferredTaskList = useDeferredValue(taskList);

  return (
    <>
      {deferredTaskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: "300px",
            margin: "auto",
            background: "lavender",
          }}
        >
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </>
  );
});