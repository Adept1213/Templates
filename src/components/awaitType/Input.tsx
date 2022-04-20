import React from "react";
import "./style.css";

const Input = ({
  onFocus,
  onBlur,
  value,
  setValue,
}: {
  onFocus: () => void;
  onBlur: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <input
    className="input"
    onFocus={() => onFocus()}
    onBlur={() => onBlur()}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

export default React.memo(Input);
