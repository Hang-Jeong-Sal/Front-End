import { GroundCategory } from "../type/ground";
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
  userId: number,
  name: string,
  image?: string[],
  category?: string[],
  convenient?: GroundConvenient[],
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

export type SortOption = '최신 순' | '오래된 순' | '인기 많은 순';
export const sortOptions: SortOption[] = ['최신 순', '오래된 순', '인기 많은 순'];
export interface GroundSearchOption {
  category: GroundCategory[],
  area: { // m^2
    from: number,
    to: number
  },
  radius: number, // km
  price: { // won
    from: number,
    to: number
  },
  sort: SortOption
}