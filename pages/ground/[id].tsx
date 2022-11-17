import Image from 'next/image';
import Back from '../../components/common/Back';
import Menu from '../../components/common/Menu';
import {
  Header,
  ImageSection,
  MainCategory,
  MainSection,
  MainTitle,
  ProfileSection,
} from '../../components/page/ground/[id]';
import styles from '../../styles/ground.module.css';

export default function Ground() {
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
        <MainCategory>주말텃밭</MainCategory>
      </MainSection>
    </>
  );
}
