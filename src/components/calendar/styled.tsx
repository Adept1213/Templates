import styled from "styled-components";

export const InputWithCalendarWrapper = styled.div`
  position: relative;
  top: 100px;
  left: 100px;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  box-sizing: border-box;
  padding: 5px;
`;

export const SVGWrapper = styled.div`
  position: absolute;
  top: 3px;
  left: 175px;
  cursor: pointer;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 35px;
  width: 200px;
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const MonthWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  left: 5px;
  cursor: pointer;
`;
export const ArrowRight = styled.div`
  position: absolute;
  transform: rotate(90deg);
  left: 170px;
  cursor: pointer;
`;

export const Month = styled.div`
  position: absolute;
  height: 100%;
  text-align: center;
  width: 140px;
  left: 30px;
  line-height: 30px;
  user-select: none;
`;

export const DaysWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 30px;
  user-select: none;
`;

export const DayWrapper = styled.div<{
  isBold?: boolean;
  isCanClick?: boolean;
  isChecked?: boolean;
  inRange?: boolean;
}>`
  box-sizing: border-box;
  height: 100%;
  width: 28px;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  ${({ isBold }) => isBold && "font-weight: bold"};
  ${({ isCanClick, isBold }) => !isCanClick && !isBold && "color: grey"};
  user-select: none;
  ${({ isCanClick }) => isCanClick && "cursor: pointer;"}
  ${({ isChecked }) => isChecked && "border: 1px solid red;"}
  ${({ inRange }) => inRange && "background-color: tomato;"}
  border-radius: 50%;
  :hover {
    ${({ isCanClick }) => isCanClick && "background-color: lightgray;"}
  }
`;
