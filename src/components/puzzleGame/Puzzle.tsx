import PuzzleItem from "./PuzzleItem";
import { PuzzleWrapper } from "./styled";

const Puzzle = () => {
  const id: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <PuzzleWrapper>
      {id.map((elem) => (
        <PuzzleItem key={elem} id={elem} />
      ))}
    </PuzzleWrapper>
  );
};

export default Puzzle;
