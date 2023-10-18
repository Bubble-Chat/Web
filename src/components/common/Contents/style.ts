import styled from "styled-components";

export interface IContentsStyleProps {
  imageBorder?: boolean;
  subTitleFontSize?: string | null;
  titleFontSize?: string | null;
  contextFontSize?: string | null;
  isActive?: boolean;
}

export const MainContiner = styled.div`
  max-width: 100%;
  padding: 20px;
  display: flex;
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
  margin-right: 20px;
  background-color: #d095ff;
  border-radius: ${({ imageBorder }: IContentsStyleProps) =>
    imageBorder ? "50%" : "10px"};
`;

export const InfoContextContents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 400px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.Font.Title};
  font-size: ${({ titleFontSize }: IContentsStyleProps) =>
    titleFontSize ? titleFontSize : "10px"};
  font-weight: 600;
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoSubTitle = styled.p`
  color: ${({ theme }) => theme.Font.Title};
  font-size: 14px;
`;

export const InfoContextContext = styled.div`
  color: ${({ theme }) => theme.Font.Context};
  font-size: ${({ contextFontSize }: IContentsStyleProps) =>
    contextFontSize ? contextFontSize : "10px"};
  font-weight: 500;
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
