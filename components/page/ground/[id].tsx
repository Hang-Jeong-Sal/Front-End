import styled from 'styled-components';
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
const ImageSection = styled.div``;
const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2vw;
  align-items: center;

  div {
    margin-left: 2vw;
    font-size: 16px;
  }
`;
const MainSection = styled.div`
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: #f4f4f4;
  padding: 2vw;
`;
const MainTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 1vw;
`;
const MainCategory = styled.div`
  color: #005452;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.333333px;
  text-decoration-line: underline;
`;
const MainTime = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  color: #b5b5b5;
  margin-left: 10px;
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  padding: 1vw;
`;
const DataTag = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Data = styled.div`
  margin-left: 1vw;
  font-weight: 400;
  font-size: 16px;
`;
const Introduction = styled.div`
  border-bottom-style: solid;
  border-color: #f4f4f4;
  padding: 2vw;
`;
const IntroTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const IntroText = styled.div`
  margin-top: 2vw;
  font-size: 16px;
`;
const DetailNav = styled.div`
  display: flex;
  max-width: 550px;
  min-width: 100px;
  width: 100%;
  align-items: center;
  position: fixed;
  bottom: 0px;
  border-top-style: solid;
  border-width: 2px;
  border-color: #f4f4f4;
  z-index: 9999;
  background-color: white;
`;
const HeartImage = styled.div`
  height: 100;
  padding: 30px;
  border-right-style: solid;
  border-width: 2px;
  border-color: #f4f4f4;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2vw;
  width: 100%;
`;
const WhiteButton = styled.button`
  width: 150px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  color: #005452;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;
const GreenButton = styled.button`
  background: #005452;
  border-radius: 7px;
  width: 150px;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
const ModalContainer = styled.div`
  z-index: 10;
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  left: 520px;
  font-size: 20px;
  padding: 5px;
  div {
    margin: 2vw;
  }
`;
export {
  Header,
  ImageSection,
  ProfileSection,
  MainSection,
  MainTitle,
  MainCategory,
  MainTime,
  Line,
  DataTag,
  Data,
  Introduction,
  IntroTitle,
  IntroText,
  WhiteButton,
  DetailNav,
  GreenButton,
  HeartImage,
  ButtonContainer,
  ModalContainer,
};
