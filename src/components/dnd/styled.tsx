import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`;

export const ColumnStyled = styled.div`
  width: 350px;
  height: 60%;
  margin-top: 15%;
  background-color: lightblue;
  border: 3px solid blue;
  border-radius: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: darkgrey;
    border: 6px solid lightblue;
  }
`;

export const ColumnTrashStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;
  width: 96%;
  height: 100px;
  background-color: tomato;
  border: 3px solid red;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
`;

export const CardStyled = styled.div`
  width: 310px;
  height: 50px;
  margin: 20px;
  background-color: yellowgreen;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  user-select: none;
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 0px;
  user-select: none;
`;

export const InputStyled = styled.input`
  width: 80%;
  height: 50px;
  position: absolute;
  top: 50px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  font-size: 30px;
  padding-left: 10px;
`;

export const SVGWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 100px;
  top: 50px;
`;

export const ErrorStyled = styled.div`
  position: absolute;
  top: 100px;
  color: red;
  font-size: 20px;
`;
