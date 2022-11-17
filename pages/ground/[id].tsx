import Image from 'next/image';
import Back from '../../components/common/Back';
import Menu from '../../components/common/Menu';
import {
  Data,
  DataTag,
  Header,
  ImageSection,
  Line,
  MainCategory,
  MainSection,
  MainTime,
  MainTitle,
  ProfileSection,
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
    </>
  );
}
