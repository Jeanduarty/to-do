import { useState } from "react";

import { useTasks } from "../../contexts/TasksContext";

import { Task } from "../Task";

import {
  InfoTasksContainer,
  TasksListContainer,
  TasksCreated,
  TasksProgress,
} from "./styles";

export function TaskList() {
  const [taskListGroup, setTaskListGroup] = useState<string[]>([]);
  const { tasks } = useTasks()

  return (
    <TasksListContainer>
      <InfoTasksContainer>
        <TasksCreated>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </TasksCreated>
        <TasksProgress>
          <strong>Concluídas</strong>
          <span>{taskListGroup.length} de {tasks.length}</span>
        </TasksProgress>
      </InfoTasksContainer>

      <Task taskListGroup={taskListGroup} setTaskListGroup={setTaskListGroup}/>
    </TasksListContainer>
  );
}
