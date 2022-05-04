import { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ITask } from "../../type/type";
import Card from "./Card";
import { ColumnStyled, Title } from "./styled";

const Column = ({
  id,
  title,
  tasks,
}: {
  id: string;
  title: string;
  tasks?: ITask[];
}) => (
  <Droppable droppableId={id}>
    {(provided) => (
      <ColumnStyled ref={provided.innerRef} {...provided.droppableProps}>
        <Title>{title}</Title>
        {provided.placeholder}
        {tasks?.map(({ id, text }, index) => (
          <Card key={id} id={id} text={text} index={index} />
        ))}
      </ColumnStyled>
    )}
  </Droppable>
);

export default memo(Column);
