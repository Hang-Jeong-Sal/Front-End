import { useState } from 'react';

import Modal from '@mui/material/Modal';

import { SearchOption, SearchOption_ko, GroundSearchOption, DefaultGroundSearchOption } from '../../lib/interface/GroundData';

import {
  VerticalContainer, HorizontalScrollableContentContainer,
  TwoRowAppBar
} from "../../components/common/Interface";

import KakaoMap from '../../components/common/Map';
import { SearchOptionButton } from "../../components/common/MenuButtonList";
import { SearchDrawer } from "../../components/common/Menu";

const searchOptions: SearchOption[] = ['category', 'radius', 'area', 'price', 'convenient', 'period'];

const Map = () => {
  const [filterOptions, setFilterOptions] = useState<GroundSearchOption>(DefaultGroundSearchOption);
  const [currentFilter, setCurrentFilter] = useState<SearchOption | null>(null);

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
        </>
        <>
          <HorizontalScrollableContentContainer style={{ padding: "16px 0 11px 0" }}>
            {
              searchOptions.map((searchOption, idx: number) => {
                return (
                  <SearchOptionButton
                    key={idx}
                    title={SearchOption_ko[searchOption]}
                    onClick={() => { setCurrentFilter(searchOption) }}
                  />
                );
              })
            }
          </HorizontalScrollableContentContainer>
        </>
      </TwoRowAppBar>
      <KakaoMap
        className={"menu-map-search"}
        longitude={126.570667} latitude={33.450701}
        containerStyle={{ width: "100vw", height: `calc(100vh - ${112}px)`, padding: "0px" }}
        style={{ width: "100vw", height: `calc(100vh - ${112}px)`, padding: "0" }}
      />
    </>
  );
};

export default Map;
