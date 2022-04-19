import { IData } from "../type/type";
import DropdownItem from "./DropdownItem";
import "./style.css";

const Dropdown = ({ data, value }: { data: IData[]; value: string }) => (
  <div className="dropdown">
    {data.map(({ id, title }) => (
      <DropdownItem key={id} id={id} title={title} value={value} />
    ))}
  </div>
);

export default Dropdown;
