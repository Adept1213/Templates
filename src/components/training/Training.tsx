import { useCallback, useState } from "react";
import { Input } from "../calendar/styled";
import Box from "./Box";

const Training = () => {
  const [value, setValue] = useState<string>("");
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <>
      <Input value={value} onChange={handler} />
      <Box />
    </>
  );
};

export default Training;
