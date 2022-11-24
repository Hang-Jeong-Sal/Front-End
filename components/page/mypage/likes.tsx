import Img from '../../common/Img';
import { useState } from 'react';
import { LikeItemData } from '../../../lib/interface/LikeItemData';
import {
  Container,
  ImageAndText,
  HeartAndInfo,
  Heart,
  Info,
  Title,
  TextContainer,
} from './ItemStyle';

export const LikeItems = ({ props }: { props: LikeItemData }) => {
  const [like, setLike] = useState(true);
  const clickHandler = () => {
    setLike((prev) => !prev);
  };
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
          <Heart onClick={clickHandler}>
            <Img
              src={like ? '/clickedHeart.svg' : '/Heart.svg'}
              width={35}
              height={35}
            />
          </Heart>
          <Info>
            35m<sup>2</sup> | ♡{props.like_count}
          </Info>
        </HeartAndInfo>
      </Container>
    </>
  );
};
