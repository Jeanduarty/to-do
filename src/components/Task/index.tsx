import { useTasks } from "../../contexts/TasksContext";

import { Trash, Check } from "phosphor-react";

import {
  TasksListGroupContainer,
  TaskItem,
  TaskChecked,
  TaskContainer,
} from "./styles";

interface TaskProps {
  taskListGroup: string[];
  setTaskListGroup: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Task({ taskListGroup, setTaskListGroup }: TaskProps) {
  const { tasks, RemoveTask } = useTasks();

  function handleClick(idTask: string) {
    const filteredTaskListGroup = taskListGroup.filter(
      (task) => task !== idTask
    );
    setTaskListGroup(filteredTaskListGroup);
    RemoveTask(idTask);
  }
  
  const reversedTasks = [...tasks].reverse()

  return (
    <TasksListGroupContainer
      type="multiple"
      value={taskListGroup}
      onValueChange={setTaskListGroup}
    >
      {reversedTasks.map((task) => (
        <TaskContainer key={task.id}>
          <TaskItem value={task.id}>
            <TaskChecked>
              <Check color="#F2F2F2" />
            </TaskChecked>
            <span>{task.description}</span>
          </TaskItem>
          <Trash color="#808080" onClick={() => handleClick(task.id)} />
        </TaskContainer>
      ))}
    </TasksListGroupContainer>
  );
}
