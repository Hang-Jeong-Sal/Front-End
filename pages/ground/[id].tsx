import Image from 'next/image';
import Back from '../../components/common/Back';
import Menu from '../../components/common/Menu';
import {
  Data,
  DataTag,
  DetailNav,
  GreenButton,
  Header,
  ImageSection,
  Introduction,
  IntroText,
  IntroTitle,
  Line,
  MainCategory,
  MainSection,
  MainTime,
  MainTitle,
  ProfileSection,
  WhiteButton,
} from '../../components/page/ground/[id]';
import styles from '../../styles/ground.module.css';

export default function Ground() {
  const dataTag = ['주소', '면적', '가격', '대여기간'];
  const tempData = [
    '서울특별시 동작구 상도동',
    '123',
    '5000',
    '2022.11.15 ~ 2023.05.15',
  ];
  return (
    <>
      <Header>
        <Back />
        <Menu />
      </Header>
      <ImageSection></ImageSection>
      <ProfileSection>
        <Image
          src="/profile.svg"
          width={50}
          height={50}
          alt="프로필이미지"
        ></Image>
        <div>상도동 불주먹</div>
      </ProfileSection>
      <MainSection>
        <MainTitle>민지네 텃밭</MainTitle>
        <Line>
          <MainCategory>주말텃밭</MainCategory>
          <MainTime>6시간 전</MainTime>
        </Line>
        {[0, 1, 2, 3].map((index) => {
          return (
            <Line key={index}>
              <DataTag>{dataTag[index]}</DataTag>
              <Data>{tempData[index]}</Data>
            </Line>
          );
        })}
      </MainSection>
      <Introduction>
        <IntroTitle>텃밭소개</IntroTitle>
        <IntroText>
          동작구 상도동에 위치한 작은 텃밭입니다~ 주말마다 오셔서 가꾸기 주시기
          좋아요. 관심있는 분들은 약속잡기전에 채팅 먼저 부탁드려요 ^^
        </IntroText>
      </Introduction>
      <DetailNav>
        <Image src="/heart.svg" width={30} height={30} alt="이미지"></Image>
        <WhiteButton>채팅하기</WhiteButton>
        <GreenButton>구매완료</GreenButton>
      </DetailNav>
    </>
  );
}
