import { ChangeEvent, memo } from "react";
import OkSVG from "../../assets/OkSVG";
import { ErrorStyled, InputStyled, SVGWrapper } from "./styled";

const Input = ({
  isError,
  value,
  handlerInput,
  placeholder,
  handlerButton,
}: {
  isError: boolean;
  value: string;
  handlerInput: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  handlerButton: () => void;
}) => {
  return (
    <>
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={handlerInput}
      />
      {isError && (
        <ErrorStyled>Must be between 2 and 80 characters</ErrorStyled>
      )}
      <SVGWrapper onClick={handlerButton}>
        <OkSVG width="50px" height="50px" />
      </SVGWrapper>
    </>
  );
};

export default memo(Input);
