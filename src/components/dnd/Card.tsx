import { Draggable } from "react-beautiful-dnd";
import { ITaskProps } from "../../type/type";
import { CardStyled } from "./styled";

const Card = ({ id, text, index }: ITaskProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provider) => (
        <CardStyled
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          {text}
        </CardStyled>
      )}
    </Draggable>
  );
};

export default Card;
