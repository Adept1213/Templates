import CalendarSVG from "../../assets/CalendarSVG";
import CalendarWeekDays from "./CalendarWeekDays";
import CalendarMonth from "./CalendarMonth";
import { useGetMonth, useOpenCloseCalendar } from "./hooks";
import { CalendarWrapper, SVGWrapper } from "./styled";
import CalendarDays from "./CalendarDays";

const Calendar = ({
  value,
  changeChosenDay,
}: {
  value: string;
  changeChosenDay: (day: number, month: string, year: number) => void;
}) => {
  const { isOpenCalendar, handlerButtonCalendar } = useOpenCloseCalendar();
  const { month, year, increaseMonth, decreaseMonth, arrDays } = useGetMonth();

  return (
    <>
      <SVGWrapper onClick={handlerButtonCalendar}>
        <CalendarSVG width="20px" height="20px" />
      </SVGWrapper>
      {isOpenCalendar && (
        <CalendarWrapper>
          <CalendarMonth
            month={month}
            year={year}
            increaseMonth={increaseMonth}
            decreaseMonth={decreaseMonth}
          />
          <CalendarWeekDays />
          <CalendarDays
            value={value}
            data={arrDays}
            month={month}
            year={year}
            changeChosenDay={changeChosenDay}
          />
        </CalendarWrapper>
      )}
    </>
  );
};

export default Calendar;
