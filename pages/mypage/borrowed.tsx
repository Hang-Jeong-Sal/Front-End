import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import { GroundData } from '../../lib/interface/GroundData';
import category from '../../atoms/category';
import { chooseAPI } from '../../lib/api/chooseApi';

export default function Borrowed() {
  const [cate, setCate] = useRecoilState(category);

  useEffect(() => {
    setCate('전체');
  }, []);

  const { data } = useQuery<GroundData[]>(['likes', cate], () =>
    chooseAPI(cate)
  );
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
