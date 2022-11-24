import { GroundConvenient } from "../type/ground";
import { Dayjs } from 'dayjs';
export interface GroundData {
  name: string;
  location: string;
  price: number;
  like_count: number;
  image: string;
}

export interface GroundDetailData {
  userId: number,
  name: string,
  images: string[],
  category: string[],
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