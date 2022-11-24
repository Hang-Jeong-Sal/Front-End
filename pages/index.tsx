import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';

import MaterialIcon from '@material/react-material-icon';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import Button from '@material/react-button';
import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from '@material/react-menu';

import {
  VerticalContainer,
  VerticalScrollable,
} from '../components/common/Interface';
import { GroundItem } from '../components/page/home';
import { Ground } from '../lib/type/ground';
import { GroundData } from '../lib/interface/GroundData';

const groundTypes: Ground[] = [
  'spare',
  'weekly',
  'rooftop',
  'school',
  'terrace',
];
const groundTypeName: { [K in Ground]: string } = {
  spare: '자투리 텃밭',
  weekly: '주말 농장',
  rooftop: '옥상 정원',
  school: '스쿨팜',
  terrace: '베란다 텃밭',
};

const handleSelectChange = (index: number, target: Element) => {};

export default function Home() {
  const [filterOptions, setFilterOptions] = useState({
    type: 'spare',
    square: 100,
    location: '상도동',
    price: 100000,
  });
  const [sortOption, setSortOption] = useState('최신 순');
  const [isOpen, setIsOpen] = useState(false);
  const menuOptions = ['최신 순', '오래된 순', '인기 많은 순'];

  const [groundData, setGroundData] = useState<GroundData[]>([]);

  useEffect(() => {
    axios
      .get('/data/ground.json')
      .then((res) => setGroundData(res.data as GroundData[]));
  }, []);

  return (
    <>
      <VerticalContainer>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <Head>
          <title>Welcome to My Green</title>
          <meta name="description" content="당신 근처의 텃밭, 당텃마켓" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopAppBar className="home-top-app-bar-alternate" fixed={true}>
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <TopAppBarTitle
                style={{
                  fontFamily: 'Pretendard Variable',
                  fontWeight: '600',
                }}
              >
                상도동
              </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
              {['search', 'menu', 'notifications'].map((iconName, idx) => {
                return (
                  <TopAppBarIcon
                    actionItem
                    tabIndex={idx}
                    key={idx}
                    className="material-symbols-outlined"
                  >
                    <MaterialIcon
                      aria-label={iconName}
                      hasRipple
                      icon={iconName}
                      onClick={() => console.log(iconName)}
                    />
                  </TopAppBarIcon>
                );
              })}
            </TopAppBarSection>
          </TopAppBarRow>
          <TopAppBarRow>
            <TopAppBarSection align="start">
              {['유형', '면적', '위치', '가격'].map((filter, idx) => {
                return (
                  <Button
                    className="filter-button-alternate"
                    outlined={true}
                    trailingIcon={
                      <MaterialIcon
                        className="filter-expand-button-alternate"
                        aria-label={'expand_more'}
                        icon={'expand_more'}
                      />
                    }
                    key={idx}
                  >
                    {filter}
                  </Button>
                );
              })}
            </TopAppBarSection>
            <TopAppBarSection
              align="end"
              onClick={(e) => {
                setIsOpen(!isOpen);
              }}
            >
              <Image
                src="/arrows_up_down.png"
                alt="arrows_up_down.png"
                width={24}
                height={24}
              />
              <div
                style={{
                  fontFamily: 'Pretendard Variable',
                  fontWeight: '500',
                  fontSize: '12px',
                }}
              >
                {sortOption}
              </div>
              <Menu
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
                coordinates={{ x: 390, y: 56 }}
                onSelected={(index, item) => {
                  setSortOption(item.firstChild?.textContent!);
                }}
              >
                <MenuList>
                  {menuOptions.map((option, index) => (
                    <MenuListItem key={index}>
                      <MenuListItemText primaryText={option} />
                      {/* You can also use other components from list, which are documented below */}
                    </MenuListItem>
                  ))}
                </MenuList>
              </Menu>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <VerticalScrollable
          style={{
            paddingTop: '14vh',
          }}
        >
          {groundData?.map((ground, idx) => {
            return <GroundItem props={ground} key={idx} />;
          })}
        </VerticalScrollable>
        <TopAppBarFixedAdjust />
      </VerticalContainer>
    </>
  );
}
