import React from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import category from '../../../atoms/category';
import Category from '../../../components/page/mypage/Category';
import { chooseAPI } from '../../../lib/api/chooseApi';
import { useEffect } from 'react';
import { ItemMaker } from '../../../components/page/mypage/ItemMaker';
import { GroundData } from '../../../lib/interface/GroundData';
import { Header } from '../../../components/page/mypage/Header';
const Grounds = () => {
  const [cate, setCate] = useRecoilState(category);
  useEffect(() => {
    setCate('전체');
  }, []);
  const { data } = useQuery<GroundData[]>(['profile', cate], () =>
    chooseAPI(cate)
  );
  return (
    <>
      <Header title={'판매상품'} />
      <Category />
      {data?.map((d, idx) => (
        <ItemMaker props={d} key={idx} />
      ))}
    </>
  );
};

export default Grounds;
