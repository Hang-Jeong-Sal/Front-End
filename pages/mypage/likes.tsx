import { useQuery } from 'react-query';
import { Header } from '../../components/page/mypage/Header';
import { LikeItems } from '../../components/page/mypage/likes';
import { getLikeData } from '../../lib/api/getLikeData';
import { LikeItemData } from '../../lib/interface/LikeItemData';

const Likes = () => {
  const { data } = useQuery<LikeItemData[]>(['likes'], getLikeData);
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
