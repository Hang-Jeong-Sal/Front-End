import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HorizontalContentContainer = styled(HorizontalContainer)`
  height: fit-content;
`;

export const VerticalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalScrollable = styled(VerticalContainer)`
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: #005452;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 84, 82, 0.6);
  }
`;