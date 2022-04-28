import { convertForDate } from "./hooks";
import { DaysWrapper, DayWrapper } from "./styled";

const CalendarDays = ({
  start,
  end,
  data,
  month,
  year,
  changeChosenDay,
}: {
  start: string;
  end: string;
  data: number[];
  month: string;
  year: number;
  changeChosenDay: (day: number, month: string, year: number) => void;
}) => {
  const indexFirstDay = data.findIndex((elem) => elem === 1);
  const isChosenDay = (day: number, start: string, end: string) =>
    `${day} ${month} ${year}` === start || `${day} ${month} ${year}` === end;
  const inRange = (today: string, start: string, end: string) => {
    const startDate = convertForDate(start);
    const endDate = convertForDate(end);
    const todayDate = convertForDate(today);
    return startDate <= todayDate && todayDate <= endDate;
  };

  return (
    <DaysWrapper>
      {data.map((day, index) =>
        index < indexFirstDay || (index > 28 && day < 7) ? (
          <DayWrapper key={index}>{day}</DayWrapper>
        ) : (
          <DayWrapper
            isCanClick
            key={index}
            onClick={() => changeChosenDay(day, month, year)}
            isChecked={isChosenDay(day, start, end)}
            inRange={inRange(`${day} ${month} ${year}`, start, end)}
          >
            {day}
          </DayWrapper>
        )
      )}
    </DaysWrapper>
  );
};

export default CalendarDays;
