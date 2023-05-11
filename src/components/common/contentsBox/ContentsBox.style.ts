import styled from "styled-components";

export const MainContainerBox = styled.nav`
  width: 90%;
  height: 3.5rem;
  padding: 4% 5%;
  background-color: white;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
`;

export const FriendImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: gray;
  border-radius: 50%;
`;

export const RoomImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: gray;
  border-radius: 1rem;
`;

export const ContextWrap = styled.nav`
  margin-left: 0.8rem;
  color: #9e9e9e;
  font-size: 1rem;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  color: black;
  margin-right: 0.5rem;
  margin-bottom: 0.3rem;
`;

export const RoomTitleWrap = styled.nav`
  display: flex;
  align-items: center;
`;

export const Context = styled.p`
  width: 20rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 1rem;
`;
