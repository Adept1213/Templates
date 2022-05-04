import { DragDropContext } from "react-beautiful-dnd";
import { defaultStore } from "../../constants/DndTodoList";
import Column from "./Column";
import ColumnTrash from "./ColumnTrash";
import { useDrag } from "./hooks";
import Input from "./Input";
import { Wrapper } from "./styled";

const Dnd = () => {
  const { value, state, isError, onDragEnd, handlerButton, handlerInput } =
    useDrag(defaultStore);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Input
          isError={isError}
          value={value}
          handlerInput={handlerInput}
          placeholder="Enter task"
          handlerButton={handlerButton}
        />
        {state.map(({ id, title, tasks }) =>
          id === "4" ? (
            <ColumnTrash key={id} id={id} />
          ) : (
            <Column key={id} id={id} title={title} tasks={tasks} />
          )
        )}
      </Wrapper>
    </DragDropContext>
  );
};

export default Dnd;
