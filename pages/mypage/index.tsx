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

export default function Mypage() {
  return (
    <>
      <MyProfileSection>
        <Img src={'/mypage_profile.svg'} width={83} height={83} />
        <InterActionSpace>
          <Name>이서현</Name>
          <Modify>내 정보 수정</Modify>
        </InterActionSpace>
        <Img src={'/modify.svg'} width={40} height={40} />
      </MyProfileSection>
      <ImageList>
        {[
          ['/borrowed.svg', '빌려준 텃밭'],
          ['/borrowing.svg', '빌린 텃밭'],
          ['/likelist.svg', '찜한 목록'],
        ].map(([src, text]) => (
          <ListContainer key={src}>
            <Img src={src} width={60} height={60} />
            <ListText>{text}</ListText>
          </ListContainer>
        ))}
      </ImageList>
      {['자주 묻는 질문', '버전 정보', '개인정보처리방침', '로그아웃'].map(
        (text) => (
          <ButtonContainer key={text}>
            <ButtonText>{text}</ButtonText>
            <Img src={'/modify.svg'} width={40} height={40} />
          </ButtonContainer>
        )
      )}
    </>
  );
}
