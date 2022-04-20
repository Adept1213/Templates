import { FC } from "react";
import styled from "styled-components";
import { SvgIconProps } from "../type/type";

const StyledSvg = styled.svg<{ width: string; height: string }>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  fill: none;
  user-select: none;
`;

export const SvgIcon: FC<SvgIconProps> = ({
  width,
  height,
  fill,
  xmlns,
  ...props
}) => (
  <StyledSvg
    width={width}
    height={height}
    fill={fill}
    xmlns={xmlns}
    {...props}
  />
);
