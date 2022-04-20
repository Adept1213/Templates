import Calendar from "./Calendar";
import { useInputValue } from "./hooks";
import { InputWithCalendarWrapper, Input } from "./styled";

const InputWithCalendar = () => {
  const { value, changeChosenDay } = useInputValue();
  console.log("render main wrapper");
  return (
    <InputWithCalendarWrapper>
      <Input value={value} />
      <Calendar value={value} changeChosenDay={changeChosenDay} />
    </InputWithCalendarWrapper>
  );
};

export default InputWithCalendar;
