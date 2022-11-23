import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { GroundData } from '..';
import Back from '../../components/common/Back';
import { Header, Title, TitleText } from '../../components/page/mypage/common';
import { useQuery } from 'react-query';
import { GroundItem } from '../../components/page/home';
import { LikeItems } from '../../components/page/mypage/likes';
function getData() {
  return axios.get('/data/ground.json').then((res) => res.data);
}
export interface LikeItemData extends GroundData {
  isLike: boolean;
}
const Likes = () => {
  const { data } = useQuery<LikeItemData[]>(['likes'], getData);
  return (
    <>
      <Header>
        <Back />
        <Title>
          <TitleText>찜한 목록</TitleText>
        </Title>
      </Header>
      {data?.map((ground: LikeItemData, idx: number) => (
        <LikeItems props={ground} key={idx} />
      ))}
    </>
  );
};

export default Likes;
