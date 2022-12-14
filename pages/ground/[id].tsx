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
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

export default function Ground() {
  const { data } = useQuery<GroundDetailData>(['detail'], getGround);
  const [isModal, setModal] = useState(false);
  const [clickedHeart, setClickedHeart] = useState(false);
  const router = useRouter();

  const TagAndData = [
    ['주소', data?.address],
    ['면적', data?.area],
    ['가격', data?.price],
    ['대여기간', `${data?.renderStartDate} ~ ${data?.renderFinishDate}`],
  ];
  function getDisplay() {
    const yearDiff = getDiff('year');
    const monthDiff = getDiff('month');
    const dayDiff = getDiff('day');
    const hourDiff = getDiff('hour');
    const minuteDiff = getDiff('minute');
    if (yearDiff) return `${yearDiff}년전`;
    if (monthDiff) return `${monthDiff}달전`;
    if (dayDiff) return `${dayDiff}일전`;
    if (hourDiff) return `${hourDiff}시간전`;
    if (minuteDiff) return `${minuteDiff}분전`;
  }
  function getDiff(t: 'year' | 'month' | 'day' | 'hour' | 'month' | 'minute') {
    const today = dayjs();
    const when = dayjs(data?.create_at);
    return today.subtract(when.get(t), t).get(t);
  }

  if (data)
    return (
      <>
        <AnimatePresence>
          {isModal ? (
            <>
              <OverlayController setState={setModal} />
              <Modal />
            </>
          ) : null}
        </AnimatePresence>
        <Header>
          <Back />
          <Menu setState={setModal} />
        </Header>
        <ImageSection>
          <Img src={data!.image![0]} width={550} height={240} />
        </ImageSection>
        <ProfileSection
          onClick={() => {
            router.push(`/profile/${data.userId}`);
          }}
        >
          <Img src="/profile.svg" width={45} height={45} />
          <div>{data.name}</div>
        </ProfileSection>
        <MainSection>
          <MainTitle>{data.name}</MainTitle>
          <Line>
            {data?.category?.map((cate, index) => (
              <MainCategory key={cate + index}> {cate} </MainCategory>
            ))}
            <MainTime>{getDisplay()}</MainTime>
          </Line>
          {TagAndData.map((oneLine, idx) => (
            <Line key={idx}>
              <DataTag>{oneLine[0]}</DataTag>
              <Data>{oneLine[1]}</Data>
            </Line>
          ))}
        </MainSection>
        <Introduction>
          <IntroTitle>텃밭소개</IntroTitle>
          <IntroText>{data?.introduction}</IntroText>
        </Introduction>
        <KakaoMap
          longitude={data!.location.x}
          latitude={data!.location.y}
        />
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
            />
          </HeartImage>
          <ButtonContainer>
            <WhiteButton>채팅하기</WhiteButton>
            <GreenButton>구매완료</GreenButton>
          </ButtonContainer>
        </DetailNav>
      </>
    );
}
