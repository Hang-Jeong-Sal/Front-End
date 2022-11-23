import axios from 'axios';
import { useQuery } from 'react-query';
import { GroundData } from '..';
import { GroundItem } from '../../components/page/home';
import Category from '../../components/page/mypage/Category';
import { Header } from '../../components/page/mypage/Header';
import { ItemMaker } from '../../components/page/mypage/ItemMaker';

function getData() {
  return axios.get('/data/ground.json').then((res) => res.data);
}
export default function Borrowed() {
  const { data } = useQuery<GroundData[]>(['likes'], getData);
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
