import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Img from './Img';

import { MainTheme } from "../../lib/color";
import { ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from "@mui/material/TextField";

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
  VerticalContentContainer, VerticalScrollable,
  HorizontalContentContainer, HorizontalScrollableContentContainer
} from "./Interface";

import { GroundCategory, GroundCategory_ko, GroundConvenient, GroundConvenient_ko } from '../../lib/type/ground';
import { GroundSearchOption, SearchOption, SearchOption_ko, DefaultGroundSearchOption } from '../../lib/interface/GroundData';

export const Menu = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => {
        setState((prev) => !prev);
      }}
    >
      <Img src="/menu.svg" width={45} height={45}></Img>
    </div>
  );
};
// export default Menu;

const CategoryFilter = (
  { currentCategories, onSelectCallback }
    :
    { currentCategories: GroundCategory[], onSelectCallback: (selectedCategories: GroundCategory[]) => void }
) => {
  const getSplicedArray = (arr: any[], start: number, deleteCount?: number | undefined) => {
    let result = arr;
    result.splice(start, deleteCount);
    return result;
  }

  const [filterCategories, setFilterCategories] = useState<GroundCategory[]>(currentCategories);
  const GroundCategories: GroundCategory[] = ['rooftop', 'school', 'spare', 'terrace', 'weekly'];

  useEffect(() => {
    onSelectCallback(filterCategories);
  }, [filterCategories]);

  useEffect(() => {
    setFilterCategories(currentCategories);
  }, [currentCategories]);

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalContentContainer style={{ height: "fit-content", alignItems: "normal" }}>
        <MenuItem value={"전체"}
          onClick={() => { setFilterCategories([]) }}
        >
          <Checkbox checked={filterCategories.length === 0} />
          <ListItemText primary={"전체"} />
        </MenuItem>
        {
          GroundCategories.map((category: GroundCategory, idx: number) => {
            return (
              <MenuItem key={idx} value={category}
                onClick={() => {
                  if (filterCategories.includes(category)) {
                    const idx = filterCategories.indexOf(category);
                    setFilterCategories([...getSplicedArray(filterCategories, idx, 1)]);
                  }
                  else
                    setFilterCategories([...filterCategories, category]);
                }}
                sx={{
                  height: "16px"
                }}
              >
                <Checkbox checked={filterCategories.indexOf(category) > -1} />
                <ListItemText primary={GroundCategory_ko[category]} sx={{ width: "80vw" }} />
              </MenuItem>
            );
          })
        }
      </VerticalContentContainer>
    </ThemeProvider>
  );
};

const RadiusFilter = (
  { currentRadius, onChangeCallback }
    :
    { currentRadius: number, onChangeCallback: (changedRadius: number) => void }
) => {
  let defaultValue = currentRadius;

  useEffect(() => {
    defaultValue = currentRadius;
  }, [currentRadius]);

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalContentContainer style={{ height: "fit-content", alignItems: "normal" }}>
        <div style={{ fontWeight: "700", fontSize: "28px", margin: "20px 0 20px 20px" }}>
          {`내 근처 기준 ${currentRadius}km 이내`}
        </div>
        <Slider
          value={defaultValue}
          aria-labelledby='discrete-slider'
          min={1} max={15} size={"medium"} valueLabelDisplay="auto"
          sx={{
            width: "calc(100vw - 40px)",
            height: "10px",
            marginLeft: "20px",
            '& .MuiSlider-thumb': {
              color: "#005452",
              width: "48px",
              height: "48px",
              border: '14px solid #FFFFFF',
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }
          }}
          onChange={(e, v) => { onChangeCallback(v as number) }}
        />
      </VerticalContentContainer>
    </ThemeProvider>
  );
};

const AreaFilter = (
  { currentArea, onChangeCallback }
    :
    {
      currentArea: { from: number, to: number },
      onChangeCallback: (changedArea: { from: number, to: number }) => void
    }
) => {
  let defaultValue = currentArea;

  useEffect(() => {
    defaultValue = currentArea;
  }, [currentArea]);

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalContentContainer style={{ height: "fit-content", alignItems: "normal" }}>
        <div style={{ fontWeight: "700", fontSize: "28px", margin: "20px 0 20px 20px" }}>
          {`${currentArea.from}㎡ ~ ${currentArea.to}㎡ `}
        </div>
        <Slider
          value={[defaultValue.from, defaultValue.to]}
          min={DefaultGroundSearchOption['area'].from} max={DefaultGroundSearchOption['area'].to} size={"medium"} valueLabelDisplay="auto"
          sx={{
            width: "calc(100vw - 40px)",
            height: "10px",
            marginLeft: "20px",
            '& .MuiSlider-thumb': {
              color: "#005452",
              width: "48px",
              height: "48px",
              border: '14px solid #FFFFFF',
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }
          }}
          onChange={(e, v) => {
            if (Array.isArray(v))
              onChangeCallback({ from: v[0], to: v[1] })
          }}
        />
      </VerticalContentContainer>
    </ThemeProvider>
  );
};

const PriceFilter = (
  { currentPrice, onChangeCallback }
    :
    {
      currentPrice: { from: number, to: number },
      onChangeCallback: (changedArea: { from: number, to: number }) => void
    }
) => {
  let defaultValue = currentPrice;

  useEffect(() => {
    defaultValue = currentPrice;
  }, [currentPrice]);

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalContentContainer style={{ height: "fit-content", alignItems: "normal" }}>
        <div style={{ fontWeight: "700", fontSize: "28px", margin: "20px 0 20px 20px" }}>
          {`${currentPrice.from}원 ~ ${currentPrice.to}원 `}
        </div>
        <Slider
          value={[defaultValue.from, defaultValue.to]}
          min={DefaultGroundSearchOption['price'].from} max={DefaultGroundSearchOption['price'].to} size={"medium"} valueLabelDisplay="auto"
          sx={{
            width: "calc(100vw - 40px)",
            height: "10px",
            marginLeft: "20px",
            '& .MuiSlider-thumb': {
              color: "#005452",
              width: "48px",
              height: "48px",
              border: '14px solid #FFFFFF',
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }
          }}
          onChange={(e, v) => {
            if (Array.isArray(v))
              onChangeCallback({ from: v[0], to: v[1] })
          }}
        />
      </VerticalContentContainer>
    </ThemeProvider>
  );
};

const ConvenientFilter = (
  { currentConvenients, onSelectCallback }
    :
    { currentConvenients: GroundConvenient[], onSelectCallback: (selectedConvenients: GroundConvenient[]) => void }
) => {
  const getSplicedArray = (arr: any[], start: number, deleteCount?: number | undefined) => {
    let result = arr;
    result.splice(start, deleteCount);
    return result;
  }

  const [filterConvenients, setFilterConnenients] = useState<GroundConvenient[]>(currentConvenients);
  const GroundConvenients: GroundConvenient[] = ['toilet', 'convenient', 'water_supply', 'parking_lot',
    'CCTV', 'equipment', 'green_house', 'soil', 'fertilizer', 'near_river', 'excavator', 'workwear',
    'cushion', 'thermometer', 'shower_room', 'storage', 'scarecrow'];

  useEffect(() => {
    onSelectCallback(filterConvenients);
  }, [filterConvenients]);

  useEffect(() => {
    setFilterConnenients(currentConvenients);
  }, [currentConvenients]);

  return (
    <ThemeProvider theme={MainTheme}>
      <VerticalScrollable style={{ height: "40vh", alignItems: "normal" }}>
        <MenuItem value={"전체"}
          onClick={() => { setFilterConnenients([]) }}
        >
          <Checkbox checked={filterConvenients.length === 0} />
          <ListItemText primary={"전체"} />
        </MenuItem>
        {
          GroundConvenients.map((convenient: GroundConvenient, idx: number) => {
            return (
              <MenuItem key={idx} value={convenient}
                onClick={() => {
                  if (filterConvenients.includes(convenient)) {
                    const idx = filterConvenients.indexOf(convenient);
                    setFilterConnenients([...getSplicedArray(filterConvenients, idx, 1)]);
                  }
                  else
                    setFilterConnenients([...filterConvenients, convenient]);
                }}
                sx={{
                  height: "16px"
                }}
              >
                <Checkbox checked={filterConvenients.indexOf(convenient) > -1} />
                <ListItemText primary={GroundConvenient_ko[convenient]} sx={{ width: "80vw" }} />
              </MenuItem>
            );
          })
        }
      </VerticalScrollable>
    </ThemeProvider>
  );
};

const PeriodFilter = (
  { currentPeriod, onChangeCallback }
    :
    { currentPeriod: { from: Dayjs, to: Dayjs }, onChangeCallback: (changedPeriod: { from: Dayjs, to: Dayjs }) => void }
) => {
  const [filterPeriod, setFilterPeriod] = useState<{ from: Dayjs, to: Dayjs }>(currentPeriod);

  useEffect(() => {
    onChangeCallback(filterPeriod);
  }, [filterPeriod]);

  useEffect(() => {
    setFilterPeriod(currentPeriod);
  }, [currentPeriod]);

  return (
    <VerticalContentContainer style={{ margin: "20px 0 0 20px", height: "fit-content", alignItems: "normal" }}>
      <div style={{ fontWeight: "700", fontSize: "28px", margin: "0 0 20px 20px" }}>
          {"시작"}
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="대여 시작 일"
          inputFormat="YYYY/MM/DD"
          value={filterPeriod.from}
          renderInput={(render) => <TextField {...render} />}
          onChange={(newValue) => {
            if (newValue !== null)
              setFilterPeriod({ ...filterPeriod, from: newValue })
          }}
        />
      </LocalizationProvider>
      <div style={{ height: "10px" }} />
      <div style={{ fontWeight: "700", fontSize: "28px", margin: "0 0 20px 20px" }}>
          {"종료"}
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="대여 종료 일"
          inputFormat="YYYY/MM/DD"
          value={filterPeriod.to}
          renderInput={(render) => <TextField {...render} />}
          onChange={(newValue) => {
            if (newValue !== null)
              setFilterPeriod({ ...filterPeriod, to: newValue })
          }}
        />
      </LocalizationProvider>
    </VerticalContentContainer>
  );
};

export const SearchDrawer = (
  {
    options,
    currentOption, currentFilterOptions,
    onCloseCallback, onOptionClickCallback, onChangeFilterOptionsCallback
  }
    :
    {
      options: SearchOption[],
      currentOption: SearchOption, currentFilterOptions: GroundSearchOption,
      onOptionClickCallback: (clickedOption: SearchOption) => void, onCloseCallback: (isClose: boolean) => void,
      onChangeFilterOptionsCallback: (changedFilterOptions: GroundSearchOption) => void
    }
) => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<GroundSearchOption>(currentFilterOptions);

  const FilterMenu: { [K in SearchOption]: JSX.Element } = {
    'category': <CategoryFilter
      currentCategories={selectedFilterOptions.category}
      onSelectCallback={(selectedCategories: GroundCategory[]) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, category: selectedCategories });
      }}
    />,
    'radius': <RadiusFilter
      currentRadius={selectedFilterOptions.radius}
      onChangeCallback={(changedRadius: number) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, radius: changedRadius });
      }}
    />,
    'area': <AreaFilter
      currentArea={selectedFilterOptions.area}
      onChangeCallback={({ from, to }) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, area: { from: from, to: to } });
      }}
    />,
    'price': <PriceFilter
      currentPrice={selectedFilterOptions.price}
      onChangeCallback={({ from, to }) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, price: { from: from, to: to } });
      }}
    />,
    'convenient': <ConvenientFilter
      currentConvenients={selectedFilterOptions.convenient}
      onSelectCallback={(selectedConvenients: GroundConvenient[]) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, convenient: selectedConvenients });
      }}
    />,
    'period': <PeriodFilter
      currentPeriod={selectedFilterOptions.period}
      onChangeCallback={(changedPeriod: { from: Dayjs, to: Dayjs }) => {
        setSelectedFilterOptions({ ...selectedFilterOptions, period: changedPeriod });
      }}
    />,
    'sort': <></>
  };


  return (
    <div
      style={{
        position: "absolute", bottom: "0vh",
        width: "100vw", height: "60vh",
        borderRadius: "25px 25px 0px 0px",
        background: MainTheme.palette.info.dark,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HorizontalContentContainer>
        <HorizontalScrollableContentContainer style={{ marginTop: "28px", paddingBottom: "14px" }}>
          {
            options.map((option, idx) => {
              return (
                <div key={idx}
                  style={{
                    fontWeight: "600", fontSize: "22px",
                    marginLeft: "30px", whiteSpace: "nowrap",
                    color: currentOption === option ? "black" : MainTheme.palette.info.contrastText
                  }}
                  onClick={() => { onOptionClickCallback(option) }}
                >
                  {SearchOption_ko[option]}
                </div>
              );
            })
          }
        </HorizontalScrollableContentContainer>
        <CloseOutlinedIcon
          style={{
            margin: "0 16px 0 16px"
          }}
          onClick={() => { onCloseCallback(true) }}
        />
      </HorizontalContentContainer>

      <VerticalContentContainer style={{ height: "fit-content", alignItems: "normal" }}>
        {
          FilterMenu[currentOption]
        }
      </VerticalContentContainer>

      <HorizontalContentContainer
        style={{
          marginTop: "auto", padding: "16px 0 16px 0", borderTop: `1px solid ${MainTheme.palette.info.contrastText}`,
          justifyContent: "space-evenly"
        }}
      >
        <ThemeProvider theme={MainTheme}>
          <Button variant="outlined" disableElevation sx={{ border: "0" }}
            onClick={() => {
              setSelectedFilterOptions((prev) => prev = { ...selectedFilterOptions, [currentOption]: DefaultGroundSearchOption[currentOption] });
            }}
          >
            <CachedOutlinedIcon sx={{ marginRight: "4px" }} />
            {`${SearchOption_ko[currentOption]} 재설정`}
          </Button>
          <Button variant="contained" disableElevation sx={{ width: "200px", height: "40px", borderRadius: "25px" }}
            onClick={() => {
              onChangeFilterOptionsCallback(selectedFilterOptions);
            }}>
            {`${0}개 텃밭 보기`}
          </Button>
        </ThemeProvider>
      </HorizontalContentContainer>
    </div>
  );
};