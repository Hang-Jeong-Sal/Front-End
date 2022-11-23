import { GroundData } from '../../../pages';
import Img from '../../common/Img';
import {
  Container,
  ImageAndText,
  HeartAndInfo,
  Info,
  Title,
  TextContainer,
} from './ItemStyle';
export const ItemMaker = ({ props }: { props: GroundData }) => {
  return (
    <>
      <Container>
        <ImageAndText>
          <Img src={props.image} width={100} height={100} />
          <TextContainer>
            <Title>{props.name}</Title>
            <p>
              <div>{props.location}</div>
              <div>{props.price}원</div>
            </p>
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
