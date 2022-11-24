import { useState, useRef } from 'react';
import { ChangeEvent } from 'react';

import MaterialIcon from '@material/react-material-icon';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { GroundCategory, GroundCategory_ko, GroundConvenient, GroundConvenient_ko } from '../lib/type/ground';
import { GroundDetailData } from '../lib/interface/GroundData';
import { VerticalScrollable, HorizontalContentContainer } from "../components/common/Interface";
import Img from "../components/common/Img";
import { Header } from '../components/page/mypage/Header';
import { ImageUploadButton } from "../components/page/upload";

import { uploadFile } from '../lib/aws/s3';

const GroundCategories: GroundCategory[] = ['spare', 'weekly', 'rooftop', 'school', 'terrace'];
const GroundConvenients: GroundConvenient[] = ['toilet', 'convenient', 'water_supply', 'parking_lot', 'CCTV', 'equipment'
  , 'green_house', 'soil', 'fertilizer', 'near_river', 'excavator', 'workwear', 'cushion', 'thermometer'
  , 'shower_room', 'storage', 'scarecrow'];

const handleSelectChange = (index: number, target: Element) => {
};

const getSplicedArray = (arr: any[], start: number, deleteCount?: number | undefined) => {
  let result = arr;
  result.splice(start, deleteCount);
  return result;
}

export default function Upload() {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState<GroundDetailData>({
    userId: 0,
    name: "",
    category: [],
    images: [],
    convenient: [],
    area: 0,
    address: "",
    period: {
      start: null,
      end: null
    },
    price: 0,
    location: {
      x: 0,
      y: 0
    },
    introduction: ""
  });

  const uploadFilesOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        uploadFile(e.target.files.item(i)!)
          .then((res) => {
            setUserInput((prev) => prev = { ...userInput, images: [...userInput.images, res.Location] });
          })
          .catch((err) => {
            alert(err);
          });
      }
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <VerticalScrollable
        style={{ padding: "0 24px 0 24px", alignItems: "normal" }}
      >
        <Header
          title={"내 땅 올리기"}
          style={{
            fontSize: "18px",
            fontWeight: "600"
          }}
        />

        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", overflow: "visible", paddingTop: "24px", flexWrap: "wrap" }}>
          {
            userInput.images.map((url, idx) => {
              return (
                <Img
                  width={80}
                  height={80}
                  key={idx}
                  src={url}
                  style={{ margin: "0 10px 10px 0" }}
                />
              );
            })
          }
          <ImageUploadButton onClick={() => { uploadRef!.current!.click()}}>
            <label htmlFor="file">
              <MaterialIcon
                aria-label={"photo_camera"}
                hasRipple
                icon={"photo_camera"}
                style={{ fontSize: "4vh" }}                
              />
            </label>
            <input
              name="file"
              type="file"
              accept=".png, .jpg, .jpeg, .svg"
              multiple
              style={{
                width: "10vh",
                height: "10vh",
                position: "absolute",
                display: "none"
              }}
              ref={uploadRef}
              onChange={uploadFilesOnChange} />
            {`${userInput.images.length}/10`}
          </ImageUploadButton>
        </HorizontalContentContainer>

        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "10px" }}>
          <TextField
            id={"outlined-start-adornment"}
            label={"제목"}
            placeholder={"당신의 텃밭 이름을 적어주세요"}
            value={userInput.name}
            variant="standard"
            fullWidth
            sx={{
              '& .MuiInput-root:before': {
                borderBottom: "0px"
              }
            }}
            onChange={(e) => { setUserInput({ ...userInput, name: e.target.value }) }}
          />
        </HorizontalContentContainer>
        <div style={{ paddingTop: "30px" }}>{"카테고리 선택"}</div>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "20px", flexWrap: "wrap" }}>
          {
            GroundCategories.map((option, idx) => {
              return (
                <Button
                  key={idx}
                  variant={userInput.category.includes(option) ? "contained" : "outlined"}
                  sx={{
                    margin: "0 10px 12px 0",
                    boxShadow: "0px 1px 4px #DADADA",
                    border: "0px solid white",
                    borderRadius: "15px"
                  }}
                  onClick={() => {
                    if (userInput.category.includes(option)) {
                      const idx = userInput.category.indexOf(option);
                      setUserInput({ ...userInput, category: [...getSplicedArray(userInput.category, idx, 1)] });
                    }
                    else
                      setUserInput({ ...userInput, category: [...userInput.category, option] })
                  }}
                >
                  {GroundCategory_ko[option]}
                </Button>
              );
            })
          }
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <div>{"주소"}</div>
          <TextField
            id={"outlined-basic-adornment"}
            variant="standard"
            value={userInput.address}
            placeholder={"도로명 주소를 입력하세요"}
            sx={{
              width: "260px",
              marginLeft: "30px",
              '& .MuiInput-root:before': {
                borderBottom: "0px"
              }
            }}
            onChange={(e) => { setUserInput({ ...userInput, address: e.target.value }) }}
          />
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <div>{"면적"}</div>
          <TextField
            id={"outlined-basic-adornment"}
            variant="standard"
            type={"number"}
            value={userInput.area === 0 ? "" : userInput.area}
            placeholder={"토지 면적을 입력해주세요"}
            InputProps={{
              endAdornment: <InputAdornment position="end">㎡</InputAdornment>,
            }}
            sx={{
              marginLeft: "30px",
              '& .MuiInput-root:before': {
                borderBottom: "0px"
              }
            }}
            onChange={(e) => { setUserInput({ ...userInput, area: Number(e.target.value) }) }}
          />
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <div>{"가격"}</div>
          <TextField
            id={"outlined-basic-adornment"}
            variant="standard"
            type={"number"}
            value={userInput.price === 0 ? "" : userInput.price}
            placeholder={"가격을 입력해주세요"}
            InputProps={{
              endAdornment: <InputAdornment position="end">/일</InputAdornment>,
            }}
            sx={{
              marginLeft: "30px",
              '& .MuiInput-root:before': {
                borderBottom: "0px"
              }
            }}
            onChange={(e) => { setUserInput({ ...userInput, price: Number(e.target.value) }) }}
          />
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <div>{"부대 시설"}</div>
          <FormControl style={{ marginLeft: "30px" }}>
            <Select
              id="demo-multiple-checkbox"
              multiple
              value={userInput.convenient}
              renderValue={(selected) => {
                let val = "";
                selected.forEach((item) => { val += GroundConvenient_ko[item] + ', '; })
                return val;
              }}
              sx={{
                width: "200px",
                height: "40px"
              }}
              onChange={(e) => { setUserInput({ ...userInput, convenient: e.target.value as GroundConvenient[] }); }}
            >
              {GroundConvenients.map((convenient, idx) => (
                <MenuItem key={idx} value={convenient}>
                  <Checkbox checked={userInput.convenient.indexOf(convenient) > -1} />
                  <ListItemText primary={GroundConvenient_ko[convenient]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <div>{"대여 기간"}</div>
          <div style={{ display: "flex", flexDirection: "column", margin: "-16px 0 0 90px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="대여 시작 일"
                inputFormat="YYYY/MM/DD"
                value={userInput.period.start}
                renderInput={(render) => <TextField {...render} />}
                onChange={(newValue) => { setUserInput({ ...userInput, period: { ...userInput.period, start: newValue } }) }}
              />
            </LocalizationProvider>
            <div style={{ height: "10px" }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="대여 종료 일"
                inputFormat="YYYY/MM/DD"
                value={userInput.period.end}
                renderInput={(render) => <TextField {...render} />}
                onChange={(newValue) => { setUserInput({ ...userInput, period: { ...userInput.period, end: newValue } }) }}
              />
            </LocalizationProvider>
          </div>
        </HorizontalContentContainer>
        <HorizontalContentContainer style={{ width: "calc(100vw - 48px)", paddingTop: "30px", flexWrap: "wrap" }}>
          <TextField
            id="standard-multiline-static"
            label="게시물"
            placeholder="게시물 내용을 작성해주세요."
            value={userInput.introduction}
            multiline
            rows={8}
            variant="standard"
            sx={{
              width: "calc(100vw - 48px)"
            }}
            onChange={(e) => {setUserInput({...userInput, introduction: e.target.value})}}
          />
        </HorizontalContentContainer>

        <Button 
          variant="contained" 
          disableElevation
          sx={{
            width: "calc(100vw - 48px)", 
            height: "60px",
            margin: "24px 0 24px 0"
          }}
        >
          {"확인"}
        </Button>
      </VerticalScrollable>
    </>
  );
}
