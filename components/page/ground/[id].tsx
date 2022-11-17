import styled from 'styled-components';
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
const ImageSection = styled.div``;
const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
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
`;
const MainTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
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
};
