import ArrowSVG from "../../assets/ArrowSVG";
import { ArrowLeft, ArrowRight, Month, MonthWrapper } from "./styled";

const CalendarMonth = ({
  month,
  year,
  increaseMonth,
  decreaseMonth,
}: {
  month: string;
  year: number;
  increaseMonth: () => void;
  decreaseMonth: () => void;
}) => (
  <MonthWrapper>
    <ArrowLeft onClick={decreaseMonth}>
      <ArrowSVG height="25px" width="25px" />
    </ArrowLeft>
    <Month>
      {month}, {year}
    </Month>
    <ArrowRight onClick={increaseMonth}>
      <ArrowSVG height="25px" width="25px" />
    </ArrowRight>
  </MonthWrapper>
);

export default CalendarMonth;
