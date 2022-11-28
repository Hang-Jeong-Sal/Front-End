import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Header } from '../../components/page/mypage/Header';
import { LikeItems } from '../../components/page/mypage/likes';
import { getLikeData } from '../../lib/api/getLikeData';
import { LikeItemData } from '../../lib/interface/LikeItemData';

const Likes = () => {
  const { data } = useQuery<LikeItemData[]>(['likes'], getLikeData);
  const [processedData, setProcessedData] = useState<LikeItemData[]>([]);
  useEffect(() => data && setProcessedData(data), [data]);
  console.log(data);
  const notLike = (singgleData: LikeItemData) => {
    const index = data!.findIndex((d) => d.id == singgleData.id);
    const length = data!.length - 1;
    setProcessedData((prev) =>
      prev!.slice(0, index).concat(prev!.slice(index + 1, length))
    );
  };
  return (
    <>
      <Header title={'찜한 목록'}></Header>
      {processedData?.map((ground: LikeItemData, idx: number) => (
        <LikeItems props={ground} key={idx} notLike={notLike} />
      ))}
    </>
  );
};

export default Likes;
