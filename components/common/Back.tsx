import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import Img from './Img';
const Back = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
    >
      <Img src="/back.svg" width={30} height={30}></Img>
    </div>
  );
};

export default Back;
