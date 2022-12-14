/** 外部import */
import { FC, useCallback, useState } from "react";

/** 内部import */
import { Avatar } from "./Avatar";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

const generateDummyTasks = (): Task[] => {
  // Array(10000).fill('')で、10000件の空文字が入った配列を生成
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addedIndex = index + 1;

      const assigneeSort = () => {
        if (addedIndex % 3 === 0) {
          return member.a;
        } else if (addedIndex % 2 === 0) {
          return member.b;
        } else {
          return member.c;
        }
      };

      return {
        id: addedIndex,
        title: `タスク${addedIndex}`,
        assignee: assigneeSort(),
      };
    });
};

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === "") {
    return tasks;
  }
  return tasks.filter((task) => task.assignee === assignee)
}

export const Transition: FC = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [isShowList, setIsShowList] = useState<boolean>(false);

  const onClickAssignee = useCallback((assignee: string): void => {
    setSelectedAssignee(assignee);
    setTaskList(filteringAssignee(assignee));
  }, []);

  return (
    <div>
      <p>transition</p>
      {/* 絞り込みボタン */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          isSelected={selectedAssignee === member.a}
          onClick={onClickAssignee}
        >
          {member.a}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.b}
          onClick={onClickAssignee}
        >
          {member.b}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.c}
          onClick={onClickAssignee}
        >
          {member.c}
        </Avatar>
      </div>
      {/* リセットボタン */}
      <br />
      <button onClick={() => onClickAssignee("")}>リセット</button>
      <br />
      <br />
      <button onClick={() => setIsShowList(!isShowList)}>表示/非表示</button>
      {/* リスト */}
      {isShowList && <TaskList taskList={taskList} />}
    </div>
  );
};
