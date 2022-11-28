import { CSSProperties } from 'react';
import { KakaoKeywordSearchData } from '../type/map';
import { GroundMarkerData } from "./GroundData";
export interface MapProps {
  latitude: number;
  longitude: number;
  keyword?: string;
  markerData?: GroundMarkerData[];
  onSearch?: (places: KakaoKeywordSearchData[]) => void;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}