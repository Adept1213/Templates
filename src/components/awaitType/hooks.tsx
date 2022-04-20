import { useCallback, useEffect, useRef, useState } from "react";
import { IData } from "../../type/type";

export function useIsOpenDropdown() {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const closeDropdown = useCallback((): void => {
    setIsOpenDropdown(false);
  }, []);
  const openDropdown = useCallback((): void => {
    setIsOpenDropdown(true);
  }, []);
  return { isOpenDropdown, closeDropdown, openDropdown };
}

export function useGetData(url: string) {
  const [data, setData] = useState<IData[]>([]);
  const getData = useCallback((url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
      });
  }, []);
  useEffect(() => {
    getData(url);
  }, []);
  return data;
}

export function sortData(data: IData[], search: string) {
  const copy = data.filter(({ title }) => title.includes(search));
  const result = copy.length > 10 ? copy.slice(0, 10) : copy;
  return result;
}

export function useDebounce(callback: any, delay: number) {
  let timer = useRef<NodeJS.Timeout>();
  const cbDebounce = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => callback(), delay);
  }, [callback, delay]);
  return cbDebounce;
}

export function separateWord(search: string, title: string) {
  const indexSearch = title.indexOf(search);
  const start = title.slice(0, indexSearch);
  const end = title.slice(indexSearch + search.length);
  return [start, end];
}
// export function useGetSearchValue(url: string, search: string) {
//   const data = useGetData(url);
//   const sort: IData[] = sortData(data, search);
//   const returnData = search.length === 0 ? [] : sort;
//   return returnData;
// }
