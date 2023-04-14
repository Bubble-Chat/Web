import styled from "styled-components";

interface IImageProps {
  Image: string;
}

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

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${(props: IImageProps) => props.Image});
  background-size: cover;
  &:hover {
    filter: contrast(10%);
  }
`;

// export const RoomIcon = styled.div`
// width: 1.5rem;
//   height: 1.5rem;
//   background-image: url(${});
//   background-size: cover;
//   &:hover {
//     filter: contrast(10%);
//   }
// `;
// export const StorageIcon = styled.div`
// width: 1.5rem;
//   height: 1.5rem;
//   background-image: url(${});
//   background-size: cover;
//   &:hover {
//     filter: contrast(10%);
//   }
// `;
// export const SettingIcon = styled.div`
// width: 1.5rem;
//   height: 1.5rem;
//   background-image: url(${});
//   background-size: cover;
//   &:hover {
//     filter: contrast(10%);
//   }
// `;
