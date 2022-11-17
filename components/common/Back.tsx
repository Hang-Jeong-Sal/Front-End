import Image from 'next/image';
import styled from 'styled-components';
const Back = () => {
  return (
    <ImageContainer>
      <Image src="/back.png" width={20} height={20} alt="이미지"></Image>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Back;
