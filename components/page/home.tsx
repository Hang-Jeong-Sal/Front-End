import Image from 'next/image';
import { useRouter } from 'next/router';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { GroundData } from '../../lib/interface/GroundData';

export const GroundItem = ({ props }: { props: GroundData }) => {
  const router = useRouter();
  function clickHandler(id: number) {
    router.push(`/ground/${id}`);
  }
  return (
    <div
      onClick={() => {
        clickHandler(props.id);
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
      <Image src={props.image} alt={'사진'} width={75} height={75} />

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
          {props.name}
        </div>
        <div
          style={{ fontWeight: '600', fontSize: '10px', color: '#878B93' }}
        >
          {props.address}
        </div>
        <div
          style={{ fontWeight: '600', fontSize: '10px', color: '#878B93' }}
        >{`${props.price}원`}</div>
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
          {props.like_count}
        </div>
      </div>
    </div>
  );
};
