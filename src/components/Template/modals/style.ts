import styled from "styled-components";

export const InputTitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.Font.Context};
  margin-bottom: 5px;
`;

export const InputContentWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: inline-block;
  margin-bottom: 30px;
`;

export const FriendList = styled.div`
  width: 300px;
  height: 150px;
  max-width: 300px;
  max-height: 150px;
  padding: 20px;
  background-color: blue;
  border-radius: 20px;
`;
