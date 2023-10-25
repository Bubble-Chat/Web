import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const MainContentsBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  z-index: 3;
`;
