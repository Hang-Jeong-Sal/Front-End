import styled from 'styled-components';

const MyProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-style: solid;
  border-color: #f4f4f4;
  padding: 20px;
  border-width: 1px;
`;
const InterActionSpace = styled.div`
  margin-left: 30px;
  margin-right: 270px;
`;
const Name = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 20px;
  margin-bottom: 10px;
`;
const Modify = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #bab8b5;
`;
const ImageList = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-bottom: solid 1px #f4f4f4;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const ListText = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #f4f4f4;
`;
const ButtonText = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
export {
  ButtonContainer,
  ButtonText,
  ListText,
  ListContainer,
  ImageList,
  MyProfileSection,
  InterActionSpace,
  Name,
  Modify,
};
