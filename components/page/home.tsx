import Image from 'next/image';
import MaterialIcon from '@material/react-material-icon';
import { GroundData } from '../../lib/interface/GroundData';
import { useRouter } from 'next/router';
export const GroundItem = ({ props }: { props: GroundData }) => {
  const router = useRouter();
  function clickHandler(id: number) {
    router.push(`/ground/${id}`);
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div
        onClick={() => {
          clickHandler(props.id);
        }}
        style={{
          width: '100vw',
          height: '12.5vh',
          borderBottom: '2px solid #F4F4F4',
          paddingLeft: '20px',
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
            {props.location}
          </div>
          <div
            style={{ fontWeight: '600', fontSize: '10px', color: '#878B93' }}
          >{`${props.price}원`}</div>
        </div>

        <MaterialIcon
          className="material-symbols-outlined"
          aria-label={'expand_more'}
          icon={'favorite'}
          style={{
            marginLeft: '38vw',
            marginTop: 'auto',
            marginBottom: '2vh',
            fontSize: '3.5vw',
          }}
        />
        <div
          style={{
            marginLeft: '2px',
            marginTop: 'auto',
            marginBottom: '2vh',
            fontSize: '12px',
            fontWeight: '200',
          }}
        >
          {props.like_count}
        </div>
      </div>
    </>
  );
};
