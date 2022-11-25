import { GroundConvenient } from "../type/ground";
import { Dayjs } from 'dayjs';
export interface GroundData {
  name: string;
  address: string;
  price: number;
  like_count: number;
  image: string;
  id: number;
}

export interface GroundDetailData {
  userId: number;
  name: string;
  category: string;
  address: string;
  area: number;
  period: string;
  price: number;
  image: string;
  introduction: string;
  location: {
    x: number;
    y: number;
  };
}

export interface GroundDetailData {
  userId: number,
  name: string,
  images: string[],
  categories: string[],
  convenient: GroundConvenient[],
  area: number,
  period: {
    start?: Dayjs | null,
    end?: Dayjs | null
  },
  price: number,
  address: string,
  location: {
    x: number,
    y: number
  }
  introduction: string,
}