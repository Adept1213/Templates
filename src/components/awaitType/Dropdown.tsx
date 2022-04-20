import { IData } from "../../type/type";
import DropdownItem from "./DropdownItem";
import "./style.css";
import { DropdownWrapper } from "./styled";

const Dropdown = ({ data, value }: { data: IData[]; value: string }) => (
  <DropdownWrapper>
    {data.map(({ id, title }) => (
      <DropdownItem key={id} id={id} title={title} value={value} />
    ))}
  </DropdownWrapper>
);

export default Dropdown;
