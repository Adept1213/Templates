import { DaysWrapper, DayWrapper } from "./styled";

const CalendarDays = ({
  value,
  data,
  month,
  year,
  changeChosenDay,
}: {
  value: string;
  data: number[];
  month: string;
  year: number;
  changeChosenDay: (day: number, month: string, year: number) => void;
}) => {
  const indexFirstDay = data.findIndex((elem) => elem === 1);
  const isChosenDay = (day: number, value: string) =>
    `${day} ${month} ${year}` === value;

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
            isChecked={isChosenDay(day, value)}
          >
            {day}
          </DayWrapper>
        )
      )}
    </DaysWrapper>
  );
};

export default CalendarDays;
