import styled from "styled-components";
import BackgroundImage from "../../../../asset/background.svg";

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 70%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  z-index: -1;
`;
