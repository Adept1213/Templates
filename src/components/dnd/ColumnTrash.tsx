import { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import TrashSVG from "../../assets/TrashSVG";
import { ColumnTrashStyled } from "./styled";

const ColumnTrash = ({ id }: { id: string }) => (
  <Droppable droppableId={id}>
    {(provided) => (
      <ColumnTrashStyled ref={provided.innerRef} {...provided.droppableProps}>
        <TrashSVG width={"60px"} height={"60px"} />
        {provided.placeholder}
      </ColumnTrashStyled>
    )}
  </Droppable>
);

export default memo(ColumnTrash);
