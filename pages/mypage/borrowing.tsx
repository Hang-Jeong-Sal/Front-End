import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';
import { useEffect } from 'react';
import category from '../../atoms/category';
import { GroundData } from '../../lib/interface/GroundData';
import { chooseAPI } from '../../lib/api/chooseApi';

const Borrowing = () => {
  const [cate, setCate] = useRecoilState(category);
  const { data } = useQuery<GroundData[]>(['likes', cate], () =>
    chooseAPI(cate)
  );
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
