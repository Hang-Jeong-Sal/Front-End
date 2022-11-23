import styled from 'styled-components';
import { LikeItemData } from '../../../pages/mypage/likes';
import Img from '../../common/Img';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  border-bottom: 2px solid #f4f4f4;
  padding: 20px;
  width: '100vw';
  align-items: 'center';
`;
const ImageAndText = styled.div`
  display: flex;
  flex-basis: 85%;
`;
const HeartAndInfo = styled.div`
  margin-top: 25px;
  display: flex;
  flex-basis: 15%;
  flex-direction: column;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  padding-left: 20px;
  font-weight: 600;
  font-size: 11px;
  color: #878b93;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: #000000;
`;
const Info = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #bab8b5;
`;
const Heart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
