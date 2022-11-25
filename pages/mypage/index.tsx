import Img from '../../components/common/Img';
import {
  ButtonContainer,
  ButtonText,
  ImageList,
  InterActionSpace,
  ListContainer,
  ListText,
  Modify,
  MyProfileSection,
  Name,
} from '../../components/page/mypage';
import { useRouter } from 'next/dist/client/router';
import { MenuButtonList } from '../../components/common/MenuButtonList';
import { NavigationBar, VerticalContainer } from "../../components/common/Interface";

export default function Mypage() {
  const router = useRouter();
  function handleClick(where: string) {
    router.push(`${window.location.pathname}${where}`);
  }

  const ImageLists = [
    ['/borrowed.svg', '빌려준 텃밭', '/borrowed'],
    ['/borrowing.svg', '빌린 텃밭', '/borrowing'],
    ['/likelist.svg', '찜한 목록', '/likes'],
  ];
  const MypageMenu = [
    '자주 묻는 질문',
    '버전 정보',
    '개인정보처리방침',
    '로그아웃',
  ];
  return (
    <>
      <VerticalContainer style={{alignItems:"normal"}}>
        <MyProfileSection>
          <Img src={'/mypage_profile.svg'} width={83} height={83} />
          <InterActionSpace>
            <Name>이서현</Name>
            <Modify>내 정보 수정</Modify>
          </InterActionSpace>
          <Img src={'/modify.svg'} width={40} height={40} />
        </MyProfileSection>

        <ImageList>
          {ImageLists.map(([src, text, link]) => (
            <ListContainer key={src} onClick={() => handleClick(link)}>
              <Img src={src} width={60} height={60} />
              <ListText>{text}</ListText>
            </ListContainer>
          ))}
        </ImageList>

        {MypageMenu.map((text) => (
          <MenuButtonList text={text} key={text} />
        ))}

        <NavigationBar currentFeature={"mypage"} style={{ marginTop: "auto" }} />
      </VerticalContainer>
    </>
  );
}
