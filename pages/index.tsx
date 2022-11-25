import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, colors } from '../lib/color';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddIcon from '@mui/icons-material/Add';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import { GroundData, GroundSearchOption, SortOption, sortOptions } from "../lib/interface/GroundData";

import { VerticalContainer, VerticalScrollable, NavigationBar } from "../components/common/Interface";
import { GroundItem } from "../components/page/home";

const AppBarTheme = createTheme({
  palette: {
    primary: {
      main: colors.background,
    },
    secondary: {
      main: colors.onBackground,
    },
    common: {
      white: "#FFFFFF"
    },
  },
});

const ButtonTheme = createTheme({
  palette: {
    primary: {
      main: colors.surface,
    },
    secondary: {
      main: colors.onSurface,
    },
  },
});

export default function Home() {
  const [filterOptions, setFilterOptions] = useState<GroundSearchOption>({
    category: [],
    area: {
      from: 0,
      to: 0
    },
    radius: 10,
    price: {
      from: 0,
      to: 0
    },
    sort: '최신 순'
  });
  const [isModal, setIsModal] = useState<boolean>(false);
  const [groundData, setGroundData] = useState<GroundData[]>([]);

  const router = useRouter();

  useEffect(() => {
    axios.get("/data/ground.json")
      .then((res) => setGroundData(res.data as GroundData[]));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Fab size="medium" color={isModal ? "info" : "primary"} aria-label="add"
          onClick={() => { setIsModal(!isModal) }}
          sx={{
            position: "absolute",
            bottom: "72px",
            right: "16px",
            transition: {
              background: "1.2s"
            },
            zIndex: "1301" // <Modal> is set to 1300
          }}>
          <Modal
            open={isModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <MenuItem
              sx={{
                width: "160px",
                height: "40px",
                position: "absolute",
                bottom: "128px",
                right: "16px",
                borderRadius: "15px",
                backgroundColor: colors.background
              }}
              onClick={() => {router.push(`/upload`)}}
            >
              <StorefrontOutlinedIcon style={{ marginRight: "12px" }} />
              {"내 땅 올리기"}
            </MenuItem>
          </Modal>
          <AddIcon
            sx={{
              transform: `rotate(${isModal ? 45 : 0}deg)`,
              transition: {
                transform: "1.2s linear"
              }
            }} />
        </Fab>
      </ThemeProvider>
      <VerticalContainer style={{ position: "relative" }}>
        <Head>
          <title>H.O.M.I</title>
          <meta name="description" content="동네 근처의 텃밭을 빌려보세요. HOMI" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={AppBarTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => { }}
                color="inherit"
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {"상도동"}
                </Typography>
                <ExpandMoreIcon />
              </IconButton>
              <div style={{ marginLeft: "auto" }}>
                {
                  [<SearchIcon key={"search"} />, <MenuIcon key={"menu"} />, <NotificationsOutlinedIcon key={"noti"} />].map((childMenu, idx) => {
                    return (
                      <IconButton
                        key={idx}
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => { }}
                        color="inherit"
                      >
                        {childMenu}
                      </IconButton>
                    );
                  })
                }
              </div>
            </Toolbar>
            <Toolbar>
              <ThemeProvider theme={ButtonTheme}>
                {
                  ["유형", "면적", "위치", "가격"].map((searchOption, idx) => {
                    return (
                      <Button
                        key={idx}
                        variant="contained"
                        disableElevation
                        sx={{
                          width: "60px",
                          height: "30px",
                          marginRight: "10px",
                          boxShadow: "0px 1px 4px #DADADA",
                          borderRadius: "20px"
                        }}
                      >
                        <div style={{ whiteSpace: "nowrap" }}>{searchOption}</div>
                        <ExpandMoreIcon />
                      </Button>
                    );
                  })
                }
                <div style={{ marginLeft: "auto", marginRight: "8px", display: "flex", alignItems: "center" }}>
                  <ImportExportSharpIcon />
                  <Select
                    value={filterOptions.sort}
                    label="Age"
                    onChange={(e) => { setFilterOptions({ ...filterOptions, sort: e.target.value as SortOption }) }}
                    sx={{
                      width: "30px",
                      height: "30px",
                      fontSize: "10px",
                      '& .MuiSelect-icon': {
                        display: "none"
                      },
                      '& .MuiOutlinedInput-input': {
                        marginLeft: "-12px"
                      }
                    }}
                  >
                    {
                      sortOptions.map((option, idx) => {
                        return (
                          <MenuItem key={idx} value={option}>{option}</MenuItem>
                        );
                      })
                    }
                  </Select>
                </div>
              </ThemeProvider>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <VerticalScrollable>
          {
            groundData?.map((ground, idx) => {
              return <GroundItem props={ground} key={idx} />;
            })
          }
        </VerticalScrollable >

        <NavigationBar currentFeature={"home"} style={{ marginTop: "auto" }} />
      </VerticalContainer >
    </>
  );
}
