import { days } from "../../constants/calendarConst";
import { DaysWrapper, DayWrapper } from "./styled";

const CalendarWeekDays = () => {
  console.log("render days");
  return (
    <DaysWrapper>
      {days.map((day, index) => (
        <DayWrapper isBold key={index}>
          {day}
        </DayWrapper>
      ))}
    </DaysWrapper>
  );
};

export default CalendarWeekDays;
