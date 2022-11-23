import Image from 'next/image';
import { useState } from 'react';
import Back from '../../components/common/Back';
import Img from '../../components/common/Img';
import Map from '../../components/common/Map';
import Menu from '../../components/common/Menu';
import OverlayController from '../../components/common/Overlay';
import {
  ButtonContainer,
  Data,
  DataTag,
  DetailNav,
  GreenButton,
  Header,
  HeartImage,
  ImageSection,
  Introduction,
  IntroText,
  IntroTitle,
  Line,
  MainCategory,
  MainSection,
  MainTime,
  MainTitle,
  Modal,
  ModalContainer,
  ProfileSection,
  WhiteButton,
} from '../../components/page/ground/[id]';

export default function Ground() {
  const dataTag = ['주소', '면적', '가격', '대여기간'];
  const tempData = [
    '서울특별시 동작구 상도동',
    '123',
    '5000',
    '2022.11.15 ~ 2023.05.15',
  ];
  const [isModal, setModal] = useState(false);
  const [clickedHeart, setClickedHeart] = useState(false);
  return (
    <>
      {isModal ? (
        <>
          <OverlayController setState={setModal}></OverlayController>
          <ModalContainer>
            <Modal>
              <div>수정하기</div>
              <div>삭제하기</div>
              <div>예약처리하기</div>
              <div>거래완료하기</div>
            </Modal>
          </ModalContainer>
        </>
      ) : null}
      <Header>
        <Back />
        <Menu setState={setModal} />
      </Header>
      <ImageSection>
        <Img src={'/detailPhoto.svg'} width={550} height={240} />
      </ImageSection>
      <ProfileSection>
        <Img src="/profile.svg" width={4.5} height={4.5} />
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
      <Map longitude={126.570667} latitude={33.450701}></Map>
      <DetailNav>
        <HeartImage
          onClick={() => {
            setClickedHeart((prev) => !prev);
          }}
        >
          <Image
            src={clickedHeart ? '/clickedHeart.svg' : '/Heart.svg'}
            width={30}
            height={30}
            alt="이미지"
          ></Image>
        </HeartImage>
        <ButtonContainer>
          <WhiteButton>채팅하기</WhiteButton>
          <GreenButton>구매완료</GreenButton>
        </ButtonContainer>
      </DetailNav>
    </>
  );
}
