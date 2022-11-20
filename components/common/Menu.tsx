import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
const Menu = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ImageContainer
      onClick={() => {
        setState((prev) => !prev);
      }}
    >
      <Image src="/menu.svg" width={40} height={40} alt="이미지"></Image>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Menu;
