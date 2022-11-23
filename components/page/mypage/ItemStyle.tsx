import styled from 'styled-components';

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
export {
  Container,
  ImageAndText,
  HeartAndInfo,
  Heart,
  Info,
  Title,
  TextContainer,
};
