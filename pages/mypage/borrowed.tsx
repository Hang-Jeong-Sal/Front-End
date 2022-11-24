import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import {
  getBorrowedTrading,
  getBorrowedComplete,
  getBorrowedEntire,
} from '../../public/data/borrowed';
import { GroundData } from '../../lib/interface/GroundData';
import { ICategory } from '../../lib/type/category';
import category from '../../atoms/category';

function getData(cate: ICategory) {
  if (cate == '거래중') return getBorrowedTrading().then((res) => res.data);
  else if (cate == '거래완료')
    return getBorrowedComplete().then((res) => res.data);
  else return getBorrowedEntire().then((res) => res.data);
}
export default function Borrowed() {
  const [cate, setCate] = useRecoilState(category);
  useEffect(() => {
    setCate('전체');
  }, []);

  const { data } = useQuery<GroundData[]>(['likes', cate], () => getData(cate));
  return (
    <>
      <Header title={'빌려준 텃밭'} />
      <Category />
      {data?.map((info, idx) => (
        <ItemMaker props={info} key={idx} />
      ))}
    </>
  );
}
