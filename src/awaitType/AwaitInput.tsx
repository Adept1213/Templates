import { useEffect, useState } from "react";
import { url } from "../constants/awaitInputConst";
import { IData } from "../type/type";
import Dropdown from "./Dropdown";
import { sortData, useDebounce, useGetData, useIsOpenDropdown } from "./hooks";
import Input from "./Input";
import "./style.css";

const AwaitInput = () => {
  const { isOpenDropdown, closeDropdown, openDropdown } = useIsOpenDropdown();
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<IData[]>([]);
  const fetchData = useGetData(url);
  const debounce = useDebounce(() => setData(sortData(fetchData, search)), 500);
  useEffect(() => {
    debounce();
  }, [search]);

  return (
    <div className="inputWrapper">
      <Input
        onBlur={closeDropdown}
        onFocus={openDropdown}
        value={search}
        setValue={setSearch}
      />
      {isOpenDropdown && <Dropdown data={data} value={search} />}
    </div>
  );
};

export default AwaitInput;
