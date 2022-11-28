import { GroundCategory } from '../type/ground';
import { GroundConvenient } from '../type/ground';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export interface GroundData {
  id: number;
  title: string;
  address: string;
  imgUrl: string[];
  price: number;
  address_1: string;
  address_2: string;
  address_3: string;
  area: number;
  likeCount: number;
  categories: GroundCategory[];
}

export interface GroundDetailData {
  userId: number;
  name: string;
  address: string;
  area: number;
  price: number;
  image?: string[];
  renderStartDate?: string | null;
  renderFinishDate?: string | null;
  introduction: string;
  location: {
    x: number;
    y: number;
  };
  create_at?: string;
  category?: string[];
  convenient?: GroundConvenient[];
}

export type SearchOption =
  | 'category'
  | 'area'
  | 'radius'
  | 'price'
  | 'convenient'
  | 'period'
  | 'sort';
export const SearchOption_ko: { [K in SearchOption]: string } = {
  category: '유형',
  area: '범위',
  radius: '지역',
  price: '가격',
  convenient: '부대 시설',
  period: '대여 기간',
  sort: '정렬',
};

export type SortOption = 'ascending' | 'descending' | 'popular';
export const SortOption_ko: { [K in SortOption]: string } = {
  ascending: '최신 순',
  descending: '오래된 순',
  popular: '인기 많은 순',
};

export interface GroundSearchOption {
  category: GroundCategory[];
  area: {
    // m^2
    from: number;
    to: number;
  };
  radius: number; // km
  price: {
    // won
    from: number;
    to: number;
  };
  convenient: GroundConvenient[];
  period: {
    from: Dayjs;
    to: Dayjs;
  };
  sort: SortOption;
}

export const DefaultGroundSearchOption: GroundSearchOption = {
  category: [],
  area: {
    from: 10,
    to: 15000,
  },
  radius: 10,
  price: {
    from: 1000,
    to: 150000,
  },
  convenient: [],
  period: {
    from: dayjs().subtract(2, 'month'),
    to: dayjs(),
  },
  sort: 'ascending',
};
