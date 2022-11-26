import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { ButtonTheme } from '../../lib/color';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Img from './Img';
import { ButtonContainer, ButtonText } from '../page/mypage';

export function MenuButtonList({
  text,
  url,
}: {
  text: string;
  url?: string | undefined;
}) {
  const router = useRouter();
  function routerHandler(url: string) {
    router.push(url);
  }
  return (
    <ButtonContainer
      key={text}
      onClick={url != undefined ? () => routerHandler(url) : undefined}
    >
      <ButtonText>{text}</ButtonText>
      <Img src={'/modify.svg'} width={40} height={40} />
    </ButtonContainer>
  );
}

export const SearchOptionButton = ({ title } : { title: string }) => {
  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button
        variant="contained"
        disableElevation
        sx={{
          width: "15vw",
          height: "3vh",
          marginRight: "10px",
          boxShadow: "0px 1px 4px #DADADA",
          borderRadius: "20px"
        }}
      >
        <div style={{ whiteSpace: "nowrap" }}>{title}</div>
        <ExpandMoreIcon />
      </Button>
    </ThemeProvider>
  );
};
