import Calendar from "./Calendar";
import { useInputValue } from "./hooks";
import { InputWithCalendarWrapper, Input } from "./styled";

const InputWithCalendar = () => {
  const { start, end, changeChosenDay } = useInputValue();

  return (
    <InputWithCalendarWrapper>
      <Input value={start} readOnly />
      <Input value={end} readOnly />
      <Calendar start={start} end={end} changeChosenDay={changeChosenDay} />
    </InputWithCalendarWrapper>
  );
};

export default InputWithCalendar;
