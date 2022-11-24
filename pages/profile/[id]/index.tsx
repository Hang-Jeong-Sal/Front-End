import { GreenButton } from '../../../components/common/CommonStyler';
import Img from '../../../components/common/Img';
import { MenuButtonList } from '../../../components/common/MenuButtonList';
import { Modify, Name } from '../../../components/page/mypage';
import { Header } from '../../../components/page/mypage/Header';
import {
  ImageSection,
  MenuSection,
  NameSection,
  ProfileSection,
} from '../../../components/page/profile/[id]';
import { useEffect } from 'react';
const Profile = () => {
  let path;
  useEffect(() => {
    path = window.location.pathname;
  }, []);
  const Menu = ['판매상품', '리뷰'];
  const URL = [`${path}/grounds`, undefined];
  return (
    <>
      <Header title={'프로필'} />
      <ProfileSection>
        <ImageSection>
          <Img src={'/mypage_profile.svg'} width={83} height={83} />
        </ImageSection>
        <NameSection>
          <Name>이서현</Name>
          <Modify>판매중인 텃밭 3개</Modify>
        </NameSection>
        <GreenButton>채팅하기</GreenButton>
      </ProfileSection>
      <MenuSection>
        {Menu.map((menu, idx) => (
          <MenuButtonList text={menu} key={menu} url={URL[idx]} />
        ))}
      </MenuSection>
    </>
  );
};

export default Profile;
