import { CSSProperties } from 'react';

export interface MapProps {
  className: string;
  latitude: number;
  longitude: number;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}
