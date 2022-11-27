import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from '../../lib/color';

import { VerticalContainer, HorizontalContentContainer } from '../../components/common/Interface';

export const LogoUrl = "https://hang-jeong-sal.s3.ap-northeast-2.amazonaws.com/image/icon.png";
export const MockupUrl = "https://hang-jeong-sal.s3.ap-northeast-2.amazonaws.com/image/mockup.png";

const Auth = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalContainer>
        <HorizontalContentContainer style={{marginTop: "160px", justifyContent: "center"}}>
          <Image
            src={LogoUrl}
            alt={"Logo"}
            width={56}
            height={56}
            style={{ filter: "drop-shadow(2px 1px 4px rgba(0, 0, 0, 0.25))" }}
          />
          <div style={{marginLeft: "16px", fontWeight: "600", fontSize: "36px"}}>{"호미"}</div>
        </HorizontalContentContainer>
        <Image
            src={MockupUrl}
            alt={"Mockup"}
            width={256}
            height={256}
            style={{marginTop: "36px"}}
          />
        <Button
          variant="contained"
          disableElevation
          sx={{
            width: "calc(100vw - 48px)",
            height: "50px",
            marginTop: "16vh",
            fontSize: "16px",
            borderRadius: "12px"
          }}
          onClick={() => { router.push(`/auth/login`) }}
        >
          {"로그인"}
        </Button>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            width: "calc(100vw - 48px)",
            height: "50px",
            marginTop: "12px",
            fontSize: "16px",
            borderRadius: "12px"
          }}
          onClick={() => { router.push(`/auth/join`) }}
        >
          {"가입 하기"}
        </Button>
      </VerticalContainer>
    </ThemeProvider>
  );
};

export default Auth;
