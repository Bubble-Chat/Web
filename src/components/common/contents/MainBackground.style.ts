import styled from "styled-components";
import BackgroundImage from "../../../asset/background.svg";

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 80rem;
  margin-left: 30rem;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;
