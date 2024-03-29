import styled from "styled-components";

type fontWeightUnion = "Bold" | "SemiBold" | "Medium" | "Light" | null;

export interface IButtonStyleProps {
  width?: string | null;
  height?: string | null;
  padding?: string | null;
  fontSize?: string | null;
  fontWeight?: fontWeightUnion;
  radius?: string | null;
  margin?: string | null;
}

const getWeight = (fontWeight: fontWeightUnion) => {
  switch (fontWeight) {
    case "Bold":
      return 700;
    case "SemiBold":
      return 600;
    case "Medium":
      return 500;
    case "Light":
      return 400;
  }
};

export const Button = styled.button<IButtonStyleProps>`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  padding: ${({ padding }) => (padding ? padding : "10px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? getWeight(fontWeight) : "500"};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  margin: ${({ margin }) => margin};
  border: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.Button.UnActive};
  &:hover {
    background-color: ${({ theme }) => theme.Button.Hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.Button.Active};
  }
`;
