import styled from "styled-components";
import Background from "../asset/Auth/Background.svg";

export const MainNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
`;

export const SubNav = styled.nav`
  width: 80%;
  height: 80%;
  margin: 5% 10%;
  background-color: white;
`;
