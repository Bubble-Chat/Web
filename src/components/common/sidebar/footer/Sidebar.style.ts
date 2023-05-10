import styled from "styled-components";

export const MainFooterContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 5% 10%;
  position: absolute;
  bottom: 0;
  background-color: white;
`;

interface IisActiveIcon {
  isActive: boolean;
}

export const IconElement = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background-size: cover;
  background-color: ${(props: IisActiveIcon) =>
    props.isActive ? "rgba(0,0,0,0.1)" : "gray"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    filter: contrast(10%);
  }
`;
/*
&:hover {
    filter: contrast(10%);
  }
*/
