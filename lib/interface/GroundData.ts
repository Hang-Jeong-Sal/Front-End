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
