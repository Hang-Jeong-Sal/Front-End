import { ButtonContainer, ButtonText } from '../page/mypage';
import Img from './Img';

export function MenuButtonList({ text }: { text: string }) {
  return (
    <ButtonContainer key={text}>
      <ButtonText>{text}</ButtonText>
      <Img src={'/modify.svg'} width={40} height={40} />
    </ButtonContainer>
  );
}
