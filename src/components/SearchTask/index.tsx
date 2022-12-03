import { useRef } from "react";

import { useTasks } from "../../contexts/TasksContext";

import { PlusCircle } from "phosphor-react";

import { getMilliseconds } from "date-fns";

import { SearchTaskContainer } from "./styles";

export function SearchTask() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { CreateNewTask } = useTasks();

  function handleClick() {
    const valueInput = inputRef.current?.value;

    if (valueInput) {
      const id = String(getMilliseconds(new Date()));

      const data = {
        id,
        description: valueInput,
      };
      CreateNewTask(data);
      inputRef.current.value = "";
    }
  }

  return (
    <SearchTaskContainer>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        ref={inputRef}
        autoFocus
      />
      <button onClick={handleClick}>
        Criar
        <PlusCircle size={16} />
      </button>
    </SearchTaskContainer>
  );
}
