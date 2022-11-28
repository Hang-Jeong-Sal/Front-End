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
import Modal from '@mui/material/Modal';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddIcon from '@mui/icons-material/Add';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import {
  GroundData, GroundSearchOption,
  SearchOption, SearchOption_ko, DefaultGroundSearchOption,
  SortOption, SortOption_ko
} from "../lib/interface/GroundData";

import { VerticalScrollable, NavigationBar, TwoRowAppBar, HorizontalScrollableContentContainer } from "../components/common/Interface";
import { SearchOptionButton } from "../components/common/MenuButtonList";
import { SearchDrawer } from "../components/common/Menu";
import { GroundItem } from "../components/page/home";

const searchOptions: SearchOption[] = ['category', 'radius', 'area', 'price', 'convenient', 'period'];
const sortOptions: SortOption[] = ['ascending', 'descending', 'popular'];

export default function Home() {
  const [filterOptions, setFilterOptions] = useState<GroundSearchOption>(DefaultGroundSearchOption);
  const [groundData, setGroundData] = useState<GroundData[]>([]);
  
  const [currentFilter, setCurrentFilter] = useState<SearchOption | null>(null);
  const [isFABModal, setIsFABModal] = useState<boolean>(false);
  const [sortAnchorElement, setSortAnchorElement] = useState<null | HTMLElement>(null);

  const router = useRouter();

  useEffect(() => {
    axios.get("http://3.35.41.141:8080/api/grounds?dong=%EC%8B%A0%EB%8C%80%EB%B0%A9%EB%8F%99", 
      {withCredentials: false})
      .then((res) => setGroundData(res.data as GroundData[]));
  }, []);

  return (
    <>
      <Head>
        <title>H.O.M.I</title>
        <meta name="description" content="동네 근처의 텃밭을 빌려보세요. HOMI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        open={isFABModal || currentFilter !== null}
      >
        <>
          {
            currentFilter !== null && <SearchDrawer
              options={searchOptions}
              currentOption={currentFilter}
              currentFilterOptions={filterOptions}
              onOptionClickCallback={(clickedOption) => {
                setCurrentFilter(clickedOption);
              }}
              onCloseCallback={(isClose) => {
                if (isClose)
                  setCurrentFilter(null);
              }}
              onChangeFilterOptionsCallback={(changedFilterOptions) => {
                setFilterOptions(changedFilterOptions);
                setCurrentFilter(null); 
              }}
            />
          }
          {
            isFABModal && <MenuItem
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
          }
        </>
      </Modal>
      {
        currentFilter === null &&
        <ThemeProvider theme={MainTheme}>
          <Fab size="medium" color={isFABModal ? "info.dark" as "info" : "primary"} aria-label="add"
            onClick={() => { setIsFABModal(!isFABModal) }}
            sx={{
              position: "absolute",
              bottom: "64px",
              right: "16px",
              transition: {
                background: "1.2s"
              },
              zIndex: 1301
            }}>
            <AddIcon
              sx={{
                transform: `rotate(${isFABModal ? 45 : 0}deg)`,
                transition: {
                  transform: "1.2s linear"
                }
              }} />
          </Fab>
        </ThemeProvider>
      }
      <TwoRowAppBar>
        <>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => { }}
            color="inherit"
          >
            <div style={{marginLeft: "16px", fontWeight: "600", fontSize: "18px"}}>{"상도동"}</div>
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
          <HorizontalScrollableContentContainer style={{ padding: "16px 0 11px 0" }}>
            {
              searchOptions.map((searchOption, idx) => {
                return (
                  <SearchOptionButton
                    key={idx}
                    title={SearchOption_ko[searchOption]}
                    style={{margin: "0 6px 0 6px"}}
                    onClick={() => { setCurrentFilter(searchOption) }}
                  />
                );
              })
            }
          </HorizontalScrollableContentContainer>
          <div
            style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            onClick={(e) => { setSortAnchorElement(sortAnchorElement === null ? e.currentTarget : null) }}
          >
            <ImportExportSharpIcon />
            <div style={{ fontWeight: "500", fontSize: "12px", whiteSpace: "nowrap" }}>
              {SortOption_ko[filterOptions.sort]}
            </div>
            <Menu
              open={sortAnchorElement !== null}
              anchorEl={sortAnchorElement}>
              {
                sortOptions.map((option, idx) => {
                  return (
                    <MenuItem
                      key={idx} value={option}
                      onClick={() => {
                        setFilterOptions((prev) => prev = { ...filterOptions, sort: option });
                      }}
                    >
                      {SortOption_ko[option]}
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
            return <GroundItem data={ground} key={idx} />;
          })
        }
      </VerticalScrollable >
      <NavigationBar currentFeature={"home"} style={{ marginTop: "auto", position: "absolute" }} />
    </>
  );
}
