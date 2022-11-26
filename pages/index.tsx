import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { ThemeProvider } from '@mui/material/styles';
import { MainTheme, colors } from '../lib/color';

import Fab from '@mui/material/Fab';

import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddIcon from '@mui/icons-material/Add';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import { GroundData, GroundSearchOption, sortOptions } from "../lib/interface/GroundData";

import { VerticalScrollable, NavigationBar, TwoRowAppBar } from "../components/common/Interface";
import { SearchOptionButton } from "../components/common/MenuButtonList";
import { GroundItem } from "../components/page/home";

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
  const [groundData, setGroundData] = useState<GroundData[]>([]);

  const [isModal, setIsModal] = useState<boolean>(false);
  const [sortAnchorElement, setSortAnchorElement] = useState<null | HTMLElement>(null);

  const router = useRouter();

  useEffect(() => {
    axios.get("/data/ground.json")
      .then((res) => setGroundData(res.data as GroundData[]));
  }, []);

  return (
    <>
      <Head>
        <title>H.O.M.I</title>
        <meta name="description" content="동네 근처의 텃밭을 빌려보세요. HOMI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={MainTheme}>
        <Fab size="medium" color={isModal ? "info" : "primary"} aria-label="add"
          onClick={() => { setIsModal(!isModal) }}
          sx={{
            position: "absolute",
            bottom: "64px",
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
                bottom: "116px",
                right: "16px",
                borderRadius: "15px",
                backgroundColor: colors.background
              }}
              onClick={() => { router.push(`/upload`) }}
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
      <TwoRowAppBar>
        <>
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
        </>
        <>
          {
            ["유형", "면적", "위치", "가격"].map((searchOption, idx) => {
              return (
                <SearchOptionButton
                  key={idx}
                  title={searchOption}
                />
              );
            })
          }
          <div
            style={{ marginLeft: "auto", marginRight: "8px", display: "flex", alignItems: "center" }}
            onClick={(e) => { setSortAnchorElement(sortAnchorElement === null ? e.currentTarget : null) }}
          >
            <ImportExportSharpIcon />
            <div style={{ fontWeight: "500", fontSize: "12px", whiteSpace: "nowrap" }}>
              {filterOptions.sort}
            </div>
            <Menu
              open={sortAnchorElement !== null}
              // onClose={() => {setSortAnchorElement(null)}}
              anchorEl={sortAnchorElement}>
              {
                sortOptions.map((option, idx) => {
                  return (
                    <MenuItem
                      key={idx} value={option}
                      onClick={() => {
                        setFilterOptions((prev) => prev = { ...filterOptions, sort: option });
                        setSortAnchorElement(null);
                      }}
                    >
                      {option}
                    </MenuItem>
                  );
                })
              }
            </Menu>
          </div>
        </>
      </TwoRowAppBar>
      <VerticalScrollable style={{ height: `calc(100vh - ${112 + 48}px)` }}>
        {
          groundData?.map((ground, idx: number) => {
            return <GroundItem props={ground} key={idx} />;
          })
        }
      </VerticalScrollable >
      <NavigationBar currentFeature={"home"} style={{ marginTop: "auto", position: "absolute" }} />
    </>
  );
}
