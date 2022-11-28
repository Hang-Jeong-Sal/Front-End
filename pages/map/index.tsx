import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';

import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import { SearchOption, SearchOption_ko, GroundSearchOption, DefaultGroundSearchOption } from '../../lib/interface/GroundData';
import { KakaoKeywordSearchData } from '../../lib/type/map';
import { GroundMarkerData } from "../../lib/interface/GroundData";

import {
  HorizontalScrollableContentContainer, HorizontalContentContainer,
  TwoRowAppBar
} from "../../components/common/Interface";

import KakaoMap from '../../components/common/Map';
import { SearchOptionButton } from "../../components/common/MenuButtonList";
import { SearchDrawer } from "../../components/common/Menu";
import { KeywordDrawer } from "../../components/page/map";

import { LogoUrl } from "../../lib/resource";

const SearchInput = styled.input`
  border: 0;
  border-radius: 20px;
  width: 50vw;
  height: 32px;
  &:focus {
    outline: none;
  }
`;

const CHUNG_ANG_UNIV = { x: 126.957101, y: 37.50508812 };

const searchOptions: SearchOption[] = ['category', 'radius', 'area', 'price', 'convenient', 'period'];

const Map = () => {
  const [filterOptions, setFilterOptions] = useState<GroundSearchOption>(DefaultGroundSearchOption);
  const [currentFilter, setCurrentFilter] = useState<SearchOption | null>(null);

  const [searchKeyword, setSearchKeyword] = useState<string | undefined>(undefined);
  const [keywordData, setKeywordData] = useState<KakaoKeywordSearchData[]>([]);

  const [currentPosition, setCurrentPosition] = useState<{ x: number, y: number }>(CHUNG_ANG_UNIV);
  const [markerData, setMarkerData] = useState<GroundMarkerData[]>([]);

  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    axios.get("/data/marker.json")
      .then((res) => setMarkerData(res.data as GroundMarkerData[]));
  }, []);

  return (
    <>
      <Modal open={currentFilter !== null}>
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
        </>
      </Modal>
      <TwoRowAppBar>
        <>
          <HorizontalContentContainer style={{ justifyContent: "space-evenly" }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => { router.push(`/`) }}
              color="inherit"
            >
              <Image
                src={LogoUrl} alt={"logo"}
                width={36} height={36}
                style={{ border: "1px solid black", borderRadius: "100%" }}
              />
            </IconButton>
            <HorizontalContentContainer
              style={{
                border: "1px solid black", borderRadius: `${searchKeyword === undefined ? "20px" : "20px 20px 0 0"}`,
                width: "fit-content", height: "fit-content"
              }}
            >
              <IconButton
                size="small"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  setSearchKeyword(searchRef.current?.value);
                }}
                color="inherit"
                sx={{ fontSize: "16px" }}
              >
                <SearchOutlinedIcon />
              </IconButton>
              <SearchInput ref={searchRef} />
            </HorizontalContentContainer>
            {
              searchKeyword !== undefined &&
              <KeywordDrawer
                data={keywordData}
                onClickCallback={(clicked) => {
                  setCurrentPosition({
                    x: Number(clicked.x),
                    y: Number(clicked.y)
                  })
                }}
                isCloseCallback={(isClose) => {
                  if (isClose)
                    setSearchKeyword(undefined);
                }}
              />
            }
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => { }}
              color="inherit"
            >
              <NotificationsOutlinedIcon />
            </IconButton>
          </HorizontalContentContainer>
        </>
        <>
          <HorizontalScrollableContentContainer style={{ padding: "16px 0 11px 0" }}>
            {
              searchOptions.map((searchOption, idx: number) => {
                return (
                  <SearchOptionButton
                    key={idx}
                    title={SearchOption_ko[searchOption]}
                    style={{ margin: "0 5px 0 5px" }}
                    onClick={() => { setCurrentFilter(searchOption) }}
                  />
                );
              })
            }
          </HorizontalScrollableContentContainer>
        </>
      </TwoRowAppBar>
      <KakaoMap
        longitude={currentPosition.x} latitude={currentPosition.y}
        keyword={searchKeyword}
        onSearch={(data) => { setKeywordData(data) }}
        markerData={markerData}
        containerStyle={{ width: "100vw", height: `calc(100vh - ${112}px)`, padding: "0px" }}
        style={{ width: "100vw", height: `calc(100vh - ${112}px)`, padding: "0" }}
      />
    </>
  );
};

export default Map;
