import styled from 'styled-components';
import Back from '../../common/Back';
const Header = ({ title }: { title: string }) => {
  return (
    <HeaderContainer>
      <Back />
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 26px;
  display: flex;
  flex-basis: 90%;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { Header, Title, TitleText };
