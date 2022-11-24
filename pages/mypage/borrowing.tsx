import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import { useEffect } from 'react';
import { ICategory } from '../../lib/type/category';
import category from '../../atoms/category';
import { GroundData } from '../../lib/interface/GroundData';
import { getTrading } from '../../lib/api/getTrading';
import { getComplete } from '../../lib/api/getComplete';
import { getEntire } from '../../lib/api/getEntire';

function getData(cate: ICategory) {
  if (cate == '거래중') return getTrading().then((res) => res.data);
  else if (cate == '거래완료') return getComplete().then((res) => res.data);
  else return getEntire().then((res) => res.data);
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
