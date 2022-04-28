import { memo } from "react";
import { useMovePuzzle } from "./hooks";
import { PuzzleItemStyled } from "./styled";

const PuzzleItem = ({ id }: { id: string }) => {
  const { x, y } = useMovePuzzle(id);
  return (
    <PuzzleItemStyled x={x} y={y} id={id}>
      {Number(id) + 1}
    </PuzzleItemStyled>
  );
};

export default memo(PuzzleItem);
