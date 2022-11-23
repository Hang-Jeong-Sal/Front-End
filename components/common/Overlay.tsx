import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    ></Overlay>
  );
};
const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  max-width: 550px;
  min-width: 100px;
`;
export default OverlayController;
