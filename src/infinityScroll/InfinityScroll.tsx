import { useCallback, useRef, useState } from "react";
import "./style.css";
import Block from "./Block";
import useScroll from "./useScroll";

interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function InfinityScroll() {
  const [data, setData] = useState<IData[]>([]);
  const [page, setPage] = useState(1);
  const parentRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const limit = 10;
  useScroll(parentRef, childrenRef, () => getData(page, limit));
  const getData = useCallback((page: number, limit: number) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData((prev) => {
          return [...prev, ...json];
        });
        setPage((prev) => prev + 1);
      });
  }, []);

  return (
    <div ref={parentRef} className="infinityScroll">
      {data &&
        data.map(({ title, id }: IData) => (
          <Block key={id} text={title} id={id} />
        ))}
      <div ref={childrenRef}></div>
    </div>
  );
}

export default InfinityScroll;
