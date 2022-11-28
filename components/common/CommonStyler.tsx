import styled from 'styled-components';

const WhiteButton = styled.button`
  flex-basis: 40%;
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
  flex-basis: 40%;
  background: #005452;
  border-radius: 7px;
  width: 150px;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export { GreenButton, WhiteButton };
