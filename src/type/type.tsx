import { CSSProperties } from "styled-components";

export interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface SvgIconProps {
  width: string;
  height: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  xmlns?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ITask {
  id: string;
  text: string;
}
export interface ITaskProps {
  id: string;
  text: string;
  index: number;
}

export interface IDNDState {
  id: string;
  title: string;
  tasks: ITask[];
}
