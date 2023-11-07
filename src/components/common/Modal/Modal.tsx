import * as S from "./style";
import { IModalProps } from "./type";

const Modal = ({
  borderRadius,
  padding,
  width,
  height,
  titleSize,
  titleWeight,
  title,
  handler,
  children,
}: IModalProps) => {
  return (
    <S.Container>
      <S.MainContentsBox
        borderRadius={borderRadius}
        padding={padding}
        width={width}
        height={height}
        titleSize={titleSize}
        titleWeight={titleWeight}
      >
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          <S.ExitButton onClick={handler} />
        </S.TitleWrap>
        {children}
      </S.MainContentsBox>
      <S.Container onClick={handler} />
    </S.Container>
  );
};

export default Modal;
