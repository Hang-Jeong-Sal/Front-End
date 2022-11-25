import { CSSProperties } from 'react';
import styled from 'styled-components';
import Back from '../../common/Back';
const Header = ({ title, style }: { title: string, style?: CSSProperties }) => {
  return (
    <HeaderContainer>
      <Back />
      <Title>
        <TitleText style={style}>{title}</TitleText>
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
  font-size: 18px;
  font-weight: "600"; 
`;
export { Header, Title, TitleText };
