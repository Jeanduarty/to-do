import { createContext, ReactNode, useContext, useState } from "react";

interface TasksProps {
  id: string;
  description: string;
}

interface TasksContextData {
  tasks: TasksProps[];
  CreateNewTask: (task: TasksProps) => void;
  RemoveTask: (idTask: string) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function CreateNewTask(task: TasksProps) {
    setTasks((state) => [...state, task]);
  }

  function RemoveTask(idTask: string) {
    const filteredTasks = tasks.filter((task) => task.id !== idTask);

    setTasks(filteredTasks);
  }

  return (
    <TasksContext.Provider value={{ tasks, CreateNewTask, RemoveTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks(){
    const context = useContext(TasksContext)
    
    return context
}