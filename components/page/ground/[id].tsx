import styled from 'styled-components';
import { motion } from 'framer-motion';
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  padding-left: 10px;
  align-items: center;

  div {
    font-size: 16px;
    padding-left: 10px;
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
  margin-bottom: 10px;
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
  padding: 10px;
`;
const DataTag = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Data = styled.div`
  margin-left: 10px;
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

const ModalBackGround = styled(motion.div)`
  top: 45px;
  flex-basis: 28%;
  position: relative;
  z-index: 10;
  background: #ffffff;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px;
`;
const ModalStyler = styled.div`
  flex-basis: 70%;
`;
const ModalContents = styled(motion.div)`
  margin: 20px;
`;
const ModalContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 550px;
  min-width: 100px;
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
  DetailNav,
  HeartImage,
  ButtonContainer,
  ModalContainer,
  ModalBackGround,
  ModalContents,
  ModalStyler,
};
