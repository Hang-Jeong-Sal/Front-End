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
export { Header, ImageSection, ProfileSection };
