import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
const Back = () => {
  const router = useRouter();
  return (
    <ImageContainer
      onClick={() => {
        router.back();
      }}
    >
      <Image src="/back.svg" width={25} height={25} alt="이미지"></Image>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  img {
    max-width: 100%;
  }
`;
export default Back;
