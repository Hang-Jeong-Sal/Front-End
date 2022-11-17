import Image from 'next/image';
import styled from 'styled-components';
const Back = () => {
  return (
    <ImageContainer>
      <Image src="/menu.svg" width={40} height={40} alt="이미지"></Image>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Back;
