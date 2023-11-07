import styled from "styled-components";
import { IModalStyle } from "./type";
import ExitButtonImage from "../../../asset/ExitButton.svg";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const MainContentsBox = styled.div<IModalStyle>`
  width: ${({ width }) => (width ? width : 500)}px;
  height: ${({ height }) => (height ? height : 300)}px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 20)}px;
  padding: ${({ padding }) => (padding ? padding : `16px 26px`)};
  background-color: white;
  box-shadow: 00px 5px 10px 5px rgba(0, 0, 0, 0.05);
  z-index: 3;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.p<IModalStyle>`
  font-size: ${({ titleSize }) => (titleSize ? titleSize : 20)}px;
  font-weight: ${({ titleWeight }) => (titleWeight ? titleWeight : 20)}px;
  color: ${({ theme }) => theme.Font.Context};
  margin-left: 10px;
`;

export const ExitButton = styled.div`
  background-image: url(${ExitButtonImage});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
