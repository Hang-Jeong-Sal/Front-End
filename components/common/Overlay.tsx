import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
const OverlayController = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Overlay
      onClick={() => {
        setState((prev) => !prev);
      }}
    ></Overlay>
  );
};
const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9;
  max-width: 550px;
  min-width: 100px;
`;
export default OverlayController;
