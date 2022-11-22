import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Img from './Img';
const Menu = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => {
        setState((prev) => !prev);
      }}
    >
      <Img src="/menu.svg" width={45} height={45}></Img>
    </div>
  );
};
export default Menu;
