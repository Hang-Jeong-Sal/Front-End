import { GroundData } from '../../../lib/interface/GroundData';
import Img from '../../common/Img';
import { useRouter } from 'next/router';
import {
  Container,
  ImageAndText,
  HeartAndInfo,
  Info,
  Title,
  TextContainer,
} from './ItemStyle';
export const ItemMaker = ({ props }: { props: GroundData }) => {
  const router = useRouter();
  function clickHandler(id: number) {
    router.push(`/ground/${id}`);
  }
  return (
    <>
      <Container
        onClick={() => {
          clickHandler(props.id);
        }}
      >
        <ImageAndText>
          <Img src={props.image} width={100} height={100} />
          <TextContainer>
            <Title>{props.name}</Title>
            <div>
              <div>{props.address}</div>
              <div>{props.price}원</div>
            </div>
          </TextContainer>
        </ImageAndText>
        <HeartAndInfo>
          <Info>
            35m<sup>2</sup> | ♡{props.like_count}
          </Info>
        </HeartAndInfo>
      </Container>
    </>
  );
};
