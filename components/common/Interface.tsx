import { ReactNode, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AppBarTheme, MainTheme } from '../../lib/color';

import { ServiceFeature } from '../../lib/type/Service';

import { ThemeProvider, Theme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const HorizontalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HorizontalContentContainer = styled(HorizontalContainer)`
  height: fit-content;
`;

export const HorizontalScrollableContentContainer = styled(
  HorizontalContentContainer
)`
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 20%;
    background: ${MainTheme.palette.info.contrastText};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${MainTheme.palette.info.main};
  }
`;

export const VerticalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalContentContainer = styled(VerticalContainer)`
  width: fit-content;
`;

export const VerticalScrollable = styled(VerticalContainer)`
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: ${MainTheme.palette.primary.main};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${MainTheme.palette.secondary.main};
  }
`;

export const NavigationBar = ({
  currentFeature,
  style,
}: {
  currentFeature: ServiceFeature;
  style?: CSSProperties;
}) => {
  const navFeatures: ServiceFeature[] = ['home', 'map', 'chat', 'mypage'];
  const commonIcons: { [K in ServiceFeature]: JSX.Element } = {
    home: <HomeIcon />,
    map: <LocationOnIcon />,
    chat: <ChatIcon />,
    mypage: <PersonIcon />,
    auth: <></>,
    profile: <></>,
    ground: <></>,
  };
  const outlinedIcons: { [K in ServiceFeature]: JSX.Element } = {
    home: <HomeOutlinedIcon />,
    map: <LocationOnOutlinedIcon />,
    chat: <ChatOutlinedIcon />,
    mypage: <PersonOutlineOutlinedIcon />,
    auth: <></>,
    profile: <></>,
    ground: <></>,
  };

  const router = useRouter();

  return (
    <div
      style={{
        ...style,
        width: '100vw',
        height: '48px',
        backgroundColor: MainTheme.palette.info.main,
        boxShadow: '0px -0.5px 0px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {navFeatures.map((menu: ServiceFeature, idx: number) => {
        return (
          <div
            key={idx}
            style={{
              width: '25vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                if (menu === 'home') router.push(`/`);
                else router.push(`/${menu}`);
              }}
              color="inherit"
            >
              {currentFeature === menu
                ? commonIcons[menu]
                : outlinedIcons[menu]}
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};

type ReactNodeList<T, N extends number> = _ReactNodeList<T, N, []>;
type _ReactNodeList<
  T,
  N extends number,
  R extends unknown[]
> = R['length'] extends N ? R : _ReactNodeList<T, N, [T, ...R]>;

export const TwoRowAppBar = ({
  children,
  theme = AppBarTheme,
}: {
  children: ReactNodeList<ReactNode, 2>;
  theme?: Theme;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>{children[0]}</Toolbar>
        <Toolbar>{children[1]}</Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
