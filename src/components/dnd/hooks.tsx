import { ChangeEvent, useCallback, useState } from "react";
import { IDNDState, ITask } from "../../type/type";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function checkForValidValue(value: string) {
  const str = value.trim().length;
  return str > 80 || str < 2 ? false : true;
}

export const useDrag = (defaultStore: IDNDState[]) => {
  const [state, setState] = useState<IDNDState[]>(defaultStore);
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    const copyState: IDNDState[] = JSON.parse(JSON.stringify(state));
    const column: IDNDState = copyState[source.droppableId - 1];

    switch (true) {
      case !destination:
        break;
      case destination.droppableId === source.droppableId &&
        destination.index === source.index:
        break;
      case destination.droppableId === source.droppableId:
        const tasks: ITask = column.tasks[source.index];
        const whenDrop: ITask = column.tasks[destination.index];
        column.tasks[source.index] = whenDrop;
        column.tasks[destination.index] = tasks;
        setState(copyState);
        break;
      case source.droppableId === "4":
        column.tasks.splice(source.index, 1);
        setState(copyState);
        break;
      case destination.droppableId !== source.droppableId:
        const columnDrop: IDNDState = copyState[destination.droppableId - 1];
        const [task] = column.tasks.splice(source.index, 1);
        columnDrop.tasks.splice(destination.index, 0, task);
        setState(copyState);
        break;
      default:
        break;
    }
  };
  const handlerInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  }, []);
  const handlerButton = useCallback(() => {
    if (checkForValidValue(value)) {
      const copyState: IDNDState[] = JSON.parse(JSON.stringify(state));
      const [firstColumn] = copyState;
      firstColumn.tasks.push({ id: uid(), text: value });
      setState(copyState);
      setValue("");
    } else {
      setIsError(true);
    }
  }, [state, value]);

  return { value, state, isError, onDragEnd, handlerInput, handlerButton };
};
