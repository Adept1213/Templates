import { memo } from "react";
import { useMovePuzzle } from "./hooks";
import { PuzzleItemStyled } from "./styled";

const PuzzleItem = ({ id }: { id: string }) => {
  const { x, y } = useMovePuzzle(id);
  return (
    <PuzzleItemStyled id={id} x={x} y={y}>
      {Number(id) + 1}
    </PuzzleItemStyled>
  );
};

export default memo(PuzzleItem);
