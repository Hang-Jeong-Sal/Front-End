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
    font-size: 2.5vw;
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
};
