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
