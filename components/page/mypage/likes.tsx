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
import { useRouter } from 'next/router';

export const LikeItems = ({ props }: { props: LikeItemData }) => {
  const [like, setLike] = useState(true);
  const router = useRouter();
  function routerHandler(id: number) {
    router.push(`/ground/${id}`);
  }
  const clickHandler = () => {
    setLike((prev) => !prev);
  };
  return (
    <>
      <Container>
        <ImageAndText
          onClick={() => {
            routerHandler(props.id);
          }}
        >
          <Img src={props.imgUrl[0]} width={100} height={100} />
          <TextContainer>
            <Title>{props.title}</Title>
            <p>
              <div>{props.address}</div>
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
            35m<sup>2</sup> | ♡{props.likeCount}
          </Info>
        </HeartAndInfo>
      </Container>
    </>
  );
};
