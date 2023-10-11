import styled from "styled-components";

interface IImageStyleProps {
  isActive?: boolean;
}

export const Image = styled.img`
  width: 30px;
  height: 30px;

  filter: ${({ isActive }: IImageStyleProps) =>
    isActive
      ? `invert(70%) sepia(60%) saturate(4412%) hue-rotate(225deg)
      brightness(100%) contrast(103%)`
      : `invert(90%) sepia(19%) saturate(3673%) hue-rotate(193deg)
      brightness(104%) contrast(103%)`};
  &:hover {
    filter: invert(86%) sepia(26%) saturate(7237%) hue-rotate(210deg)
      brightness(100%) contrast(102%);
  }
  &:active {
    filter: invert(70%) sepia(60%) saturate(4412%) hue-rotate(225deg)
      brightness(100%) contrast(103%);
  }
`;
