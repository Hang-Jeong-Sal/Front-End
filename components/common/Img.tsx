import Image from 'next/image';
import styled from 'styled-components';
interface IimageStyled {
  width: number;
  height: number;
}
interface Iimage extends IimageStyled {
  src: string;
}
const Img = ({ width, height, src }: Iimage) => {
  return (
    <ImageContainer width={width} height={height}>
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
