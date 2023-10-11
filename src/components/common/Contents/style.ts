import styled from "styled-components";

export interface IContentsStyleProps {
  imageBorder?: boolean;
  titleFontSize?: string | null;
  contextFontSize?: string | null;
}

export const MainContiner = styled.div`
  max-width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.Content.UnActive};
  &:hover {
    background-color: ${({ theme }) => theme.Content.Hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.Content.Active};
  }
`;

export const InfoImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: ${({ imageBorder }: IContentsStyleProps) =>
    imageBorder ? "50%" : "10px"};
`;

export const InfoContextContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.Font.Title};
  font-size: ${({ titleFontSize }: IContentsStyleProps) =>
    titleFontSize ? titleFontSize : "10px"};
  font-weight: 600;
`;

export const InfoContextContext = styled.div`
  color: ${({ theme }) => theme.Font.Context};
  font-size: ${({ contextFontSize }: IContentsStyleProps) =>
    contextFontSize ? contextFontSize : "10px"};
  font-weight: 500;
`;
