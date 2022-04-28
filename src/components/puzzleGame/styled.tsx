import styled from "styled-components";

export const PuzzleWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 900px;
  border: 1px solid black;
  margin: 0 auto;
`;

export const PuzzleItemStyled = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y + "px;"};
  left: ${({ x }) => x + "px"};
  width: 100px;
  height: 100px;
  background-color: tomato;
  text-align: center;
  font-size: 50px;
  line-height: 100px;
  user-select: none;
  border: 1px solid brown;
`;
