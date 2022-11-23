import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { GroundData } from '..';
import category, { ICategory } from '../../atoms/category';
import { GroundItem } from '../../components/page/home';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import {
  getBorrowedTrading,
  getBorrowedComplete,
  getBorrowedEntire,
} from '../../public/data/borrowed';
function getData(cat: ICategory) {
  if (cat == '거래중') return getBorrowedTrading().then((res) => res.data);
  else if (cat == '거래완료')
    return getBorrowedComplete().then((res) => res.data);
  else return getBorrowedEntire().then((res) => res.data);
}
export default function Borrowed() {
  const cat = useRecoilValue(category);
  const { data } = useQuery<GroundData[]>(['likes', cat], () => getData(cat));
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
