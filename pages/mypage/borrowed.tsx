import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';

import { GroundData } from '../../lib/interface/GroundData';
import { ICategory } from '../../lib/type/category';
import category from '../../atoms/category';
import { getTrading } from '../../lib/api/getTrading';
import { getComplete } from '../../lib/api/getComplete';
import { getEntire } from '../../lib/api/getEntire';

function getData(cate: ICategory) {
  if (cate == '거래중') return getTrading().then((res) => res.data);
  else if (cate == '거래완료') return getComplete().then((res) => res.data);
  else return getEntire().then((res) => res.data);
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
