import Image from 'next/image';
import styled from 'styled-components';
import { Iimage } from '../../lib/interface/Iimage';
import { IimageStyled } from '../../lib/interface/IimageStyled';

const Img = ({ width, height, src, style }: Iimage) => {
  return (
    <ImageContainer width={width} height={height} style={style}>
      <Image src={src} alt={'이미지'} fill={true}></Image>
    </ImageContainer>
  );
};
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props: IimageStyled) => props.width}px;
  height: ${(props: IimageStyled) => props.height}px;
`;
export default Img;
