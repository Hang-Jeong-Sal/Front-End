import axios from 'axios';
import { Header } from '../../components/page/mypage/Header';
import { useQuery } from 'react-query';
import { LikeItems } from '../../components/page/mypage/likes';
import { LikeItemData } from '../../lib/interface/LikeItemData';

function getData() {
  return axios.get('/data/ground.json').then((res) => res.data);
}

const Likes = () => {
  const { data } = useQuery<LikeItemData[]>(['likes'], getData);
  return (
    <>
      <Header title={'찜한 목록'}></Header>
      {data?.map((ground: LikeItemData, idx: number) => (
        <LikeItems props={ground} key={idx} />
      ))}
    </>
  );
};

export default Likes;
