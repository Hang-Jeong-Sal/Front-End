import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import axios from 'axios';

import { ThemeProvider } from '@mui/material/styles';
import { MainTheme, KakaoTheme } from '../../lib/color';

import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Modal from '@mui/material/Modal';

import { LoginInfo } from '../../lib/type/Service';

import { VerticalContainer, HorizontalContentContainer } from '../../components/common/Interface';
import { Header } from '../../components/page/mypage/Header';

const isEmptyLoginInput: (input: LoginInfo) => boolean = (input: LoginInfo) => {
  return (input.email.length === 0 || input.password.length === 0);
};

const Login = () => {
  const [loginInput, setLoginInput] = useState<LoginInfo>({
    email: "",
    password: ""
  });

  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      // axios.post("");
    }
  }, []);

  return (
    <ThemeProvider theme={MainTheme}>
      <Modal
        open={router.query.code !== undefined}
      >
        <div style={{ 
          position: "absolute", 
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
          width: "80vw", height: "50vh", 
          backgroundColor: "white",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{fontWeight: "600", fontSize: "32px", marginBottom: "16px"}}>{"인가 코드"}</div>
          {router.query.code}
          <div
            style={{color: "red", fontWeight: "800", fontSize: "16px", marginTop: "32px"}} 
            onClick={() => {router.push('/auth/login')}}>{"닫기"}</div>
        </div>
      </Modal>

      <Header title={'로그인'} style={{ fontWeight: "800" }} />
      <VerticalContainer style={{ height: "fit-content" }}>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "50px" }}>
          <TextField
            type={"email"}
            id={"email_input"}
            label={"이메일"}
            placeholder={"hellopuang@cau.ac.kr"}
            value={loginInput.email}
            variant="standard"
            fullWidth
            onChange={(e) => { setLoginInput({ ...loginInput, email: e.target.value }) }}
          />
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "50px" }}>
          <TextField
            type={"password"}
            id={"password_input"}
            label={"비밀번호"}
            value={loginInput.password}
            variant="standard"
            fullWidth
            onChange={(e) => { setLoginInput({ ...loginInput, password: e.target.value }) }}
          />
        </HorizontalContentContainer>

        <Button
          variant="contained"
          disabled={isEmptyLoginInput(loginInput)}
          disableElevation
          sx={{
            width: "calc(100vw - 48px)",
            height: "50px",
            marginTop: "36px",
            fontSize: "16px",
            borderRadius: "12px"
          }}
          onClick={() => {}}
        >
          {"로그인"}
        </Button>
        <ThemeProvider theme={KakaoTheme}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "calc(100vw - 48px)",
              height: "50px",
              marginTop: "12px",
              fontSize: "16px",
              borderRadius: "12px"
            }}
            startIcon={<Image src={"/kakao.png"} width={16} height={16} alt="kakao" />}
            onClick={() => {
              window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}&redirect_uri=${window.location.href}&response_type=code`;
            }}
          >
            {"카카오 로그인"}
          </Button>
        </ThemeProvider>
        <div style={{ marginTop: "20px", color: "#BAB8B5", fontSize: "12px" }}><u>{"비밀 번호가 기억나지 않으신가요?"}</u></div>
        <div style={{ marginTop: "36vh", color: "#BAB8B5", fontSize: "12px", display: "flex" }}
          onClick={() => { router.push("/auth/join") }}
        >
          {"호미가 처음이신가요?"}
          <div style={{ marginLeft: "4px", color: MainTheme.palette.primary.main }}>{"가입하기"}</div>
        </div>
      </VerticalContainer>
    </ThemeProvider>
  );
};

export default Login;
