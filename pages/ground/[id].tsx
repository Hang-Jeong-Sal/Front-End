import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Back from '../../components/common/Back';
import Img from '../../components/common/Img';
import KakaoMap from '../../components/common/Map';
import { Menu } from '../../components/common/Menu';
import OverlayController from '../../components/common/Overlay';

import {
  ButtonContainer,
  Data,
  DataTag,
  DetailNav,
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
  ProfileSection,
} from '../../components/page/ground/[id]';
import Modal from '../../components/page/ground/Modal';
import { GreenButton, WhiteButton } from '../../components/common/CommonStyler';
import { useQuery } from 'react-query';
import { getGround } from '../../lib/api/getGround';
import { GroundDetailData } from '../../lib/interface/GroundData';

export default function Ground() {
  const { data } = useQuery<GroundDetailData>(['detail'], getGround);
  const [isModal, setModal] = useState(false);
  const [clickedHeart, setClickedHeart] = useState(false);
  console.log(data);
  if (data)
    return (
      <>
        <AnimatePresence>
          {isModal ? (
            <>
              <OverlayController setState={setModal}></OverlayController>
              <Modal />
            </>
          ) : null}
        </AnimatePresence>
        <Header>
          <Back />
          <Menu setState={setModal} />
        </Header>
        <ImageSection>
          <Img src={'/detailPhoto.svg'} width={550} height={240} />
        </ImageSection>
        <ProfileSection>
          <Img src="/profile.svg" width={45} height={45} />
          <div>상도동 불주먹</div>
        </ProfileSection>
        <MainSection>
          <MainTitle>민지네 텃밭</MainTitle>
          <Line>
            <MainCategory>주말텃밭</MainCategory>
            <MainTime>6시간 전</MainTime>
          </Line>
          <Line>
            <DataTag>주소</DataTag>
            <Data>{data?.address}</Data>
          </Line>
          <Line>
            <DataTag>면적</DataTag>
            <Data>{data?.area}</Data>
          </Line>
          <Line>
            <DataTag>가격</DataTag>
            <Data>{data?.price}</Data>
          </Line>
          <Line>
            <DataTag>대여기간</DataTag>
            <Data>
              {data?.renderStartDate} ~ {data?.renderFinishDate}
            </Data>
          </Line>
        </MainSection>
        <Introduction>
          <IntroTitle>텃밭소개</IntroTitle>
          <IntroText>{data?.introduction}</IntroText>
        </Introduction>
        <KakaoMap
          className={'map'}
          longitude={data!.location.x}
          latitude={data!.location.y}
        ></KakaoMap>
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
