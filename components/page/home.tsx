import Image from 'next/image';
import { useRouter } from 'next/router';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { GroundData } from '../../lib/interface/GroundData';

export const GroundItem = ({ data }: { data: GroundData }) => {
  const router = useRouter();
  function clickHandler(id: number) {
    router.push(`/ground/${id}`);
  }
  return (
    <div
      onClick={() => {
        clickHandler(data.id);
      }}
      style={{
        width: '100vw',
        height: '12.5vh',
        borderBottom: '2px solid #F4F4F4',
        padding: '10px 0 10px 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image src={data.imgUrl[0]} alt={'사진'} width={75} height={75} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingLeft: '20px',
          height: '7vh',
        }}
      >
        <div style={{ fontWeight: '500', fontSize: '16px' }}>
          {data.title}
        </div>
        <div
          style={{ fontWeight: '600', fontSize: '10px', color: '#878B93' }}
        >
          {data.address}
        </div>
        <div
          style={{ fontWeight: '600', fontSize: '10px', color: '#878B93' }}
        >{`${data.price}원`}</div>
      </div>

      <div
        style={{
          margin: 'auto 20px 10px auto',
          fontSize: '12px',
          display: "flex",
          flexDirection: "row"
        }}
      >
        <FavoriteBorderOutlinedIcon style={{ fontSize: '12px', marginRight: '4px'}}/>
        <div style={{ fontSize: '12px', fontWeight: '200' }}>
          {data.likeCount}
        </div>
      </div>
    </div>
  );
};
