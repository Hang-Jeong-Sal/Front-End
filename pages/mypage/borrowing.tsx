import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { GroundData } from '..';
import category, { ICategory } from '../../atoms/category';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import {
  getBorrowedTrading,
  getBorrowedComplete,
  getBorrowedEntire,
} from '../../public/data/borrowed';
import { useEffect } from 'react';

function getData(cate: ICategory) {
  if (cate == '거래중') return getBorrowedTrading().then((res) => res.data);
  else if (cate == '거래완료')
    return getBorrowedComplete().then((res) => res.data);
  else return getBorrowedEntire().then((res) => res.data);
}
const Borrowing = () => {
  const [cate, setCate] = useRecoilState(category);
  const { data } = useQuery<GroundData[]>(['likes', cate], () => getData(cate));
  useEffect(() => {
    setCate('전체');
  }, []);
  return (
    <>
      <Header title={'빌린 텃밭'} />
      <Category />
      {data?.map((info, idx) => (
        <ItemMaker props={info} key={idx} />
      ))}
    </>
  );
};

export default Borrowing;
