import { separateWord } from "./hooks";
import { Span, WrapperDropdownItem } from "./styled";

const DropdownItem = ({
  id,
  title,
  value,
}: {
  id: number;
  title: string;
  value: string;
}) => {
  const [start, end] = separateWord(value, title);
  return (
    <WrapperDropdownItem>
      id - {id}
      <br /> title - {start}
      <Span>{value}</Span>
      {end}
    </WrapperDropdownItem>
  );
};

export default DropdownItem;
