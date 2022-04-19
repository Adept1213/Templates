import { separateWord } from "./hooks";

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
    <div className="dropdown__item">
      id - {id}
      <br /> title - {start}
      <span className="test">{value}</span>
      {end}
    </div>
  );
};

export default DropdownItem;
