import styled from "styled-components";
import { IInputStyle } from "./type";

export const Input = styled.input<IInputStyle>`
  max-width: ${({ width }) => (width ? width : 300)}px;
  width: ${({ width }) => (width ? width : 300)}px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  border: 1px solid ${({ theme }) => theme.Gray.G200};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 10)}px;
  padding: ${({ padding }) => (padding ? padding : "20px")};
  background-color: white;
  color: ${({ theme }) => theme.Font.Context};
  ::placeholder {
    color: ${({ theme }) => theme.Font.SubContext};
  }
`;
