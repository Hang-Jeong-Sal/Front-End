import { useState, useRef } from 'react';
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import Image from 'next/image';

import { uploadFile } from '../../lib/aws/s3';

import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from '../../lib/color';

import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import { VerticalContainer, HorizontalContentContainer } from '../../components/common/Interface';
import { Header } from '../../components/page/mypage/Header';
import { ImageUploadButton } from "../../components/page/upload";

import { 
  JoinFieldName_ko,
  UserInfoField, JoinInfo 
} from '../../lib/type/Service';

export const DefaultProfileUrl = "https://hang-jeong-sal.s3.ap-northeast-2.amazonaws.com/image/default_profile.png";

const InputType: {[K in UserInfoField]: HTMLInputTypeAttribute} = {
  profile: "file",
  name: "text",
  email: "email",
  password: "password",
  password_confirmation: "password"
};

const isValidJoinInput: (input: JoinInfo) => boolean = (input) => {
  return !(input.profile.length === 0 || input.name.length === 0 || input.password.length === 0 
    || input.password_confirmation.length === 0 || input.password !== input.password_confirmation);
}

const Join = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [joinInput, setJoinInput] = useState<JoinInfo>({
    profile: DefaultProfileUrl,
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const JoinInputFields: UserInfoField[] = ["name", "email", "password", "password_confirmation"];

  const uploadFilesOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      uploadFile(e.target.files[0])
        .then((res) => {
          setJoinInput((prev) => prev = { ...joinInput, profile: res.Location });
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Header title={'회원 가입'} style={{ fontWeight: "800" }} />
      <VerticalContainer style={{ height: "fit-content" }}>
        <ImageUploadButton
          style={{ marginTop: "36px", borderRadius: "100%" }}
          onClick={() => { uploadRef!.current!.click() }}
        >
          <label htmlFor="file">
            <Image
              src={joinInput.profile}
              alt={"Profile"}
              width={74}
              height={74}
              style={{ borderRadius: "100%" }}
            />
          </label>
          <input
            name="file"
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            multiple
            style={{
              width: "74px",
              height: "74px",
              position: "absolute",
              display: "none"
            }}
            ref={uploadRef}
            onChange={uploadFilesOnChange} />
        </ImageUploadButton>
        {
          JoinInputFields.map((field, idx) => {
            return (
              <HorizontalContentContainer key={idx} style={{ width: "calc(100vw - 48px)", paddingTop: "50px" }}>
                <TextField
                  error={
                    (field === "password_confirmation" 
                    && (joinInput.password !== joinInput.password_confirmation)
                    && (joinInput.password_confirmation.length !== 0))
                  }
                  type={InputType[field]}
                  variant="standard"
                  id={"outlined-start-adornment"}
                  label={JoinFieldName_ko[field]}
                  value={joinInput[field]}
                  fullWidth
                  onChange={(e) => { setJoinInput({ ...joinInput, [field]: e.target.value }) }}
                />
              </HorizontalContentContainer>
            );
          })
        }
        <Button
          variant="contained"
          disabled={!isValidJoinInput(joinInput)}
          disableElevation
          sx={{
            width: "calc(100vw - 48px)",
            height: "50px",
            marginTop: "48px",
            fontSize: "16px",
            borderRadius: "5px"
          }}
          onClick={() => {}}
        >
          {"회원 가입"}
        </Button>
      </VerticalContainer>
    </ThemeProvider>
  );
};

export default Join;
