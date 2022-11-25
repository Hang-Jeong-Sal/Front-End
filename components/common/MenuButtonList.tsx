import { ButtonContainer, ButtonText } from '../page/mypage';
import Img from './Img';
import { useRouter } from 'next/router';

export function MenuButtonList({
  text,
  url,
}: {
  text: string;
  url?: string | undefined;
}) {
  const router = useRouter();
  function routerHandler(url: string) {
    router.push(url);
  }
  return (
    <ButtonContainer
      key={text}
      onClick={url != undefined ? () => routerHandler(url) : undefined}
    >
      <ButtonText>{text}</ButtonText>
      <Img src={'/modify.svg'} width={40} height={40} />
    </ButtonContainer>
  );
}
