import { stringify } from 'querystring';
import { GroundDetailData } from '../interface/GroundData';

export async function getGround() {
  return await new Promise((resolve) => {
    const result = {
      data: {
        userId: 12,
        name: '민지네 텃밭',
        category: ['주말텃밭'],
        address: '서울특별시 동작구 상도동',
        area: 123,
        period: '2022.11.15 ~ 2023.05.15',
        price: 5000,
        image: ['sadfakls'],
        introduction: '~~',
        location: {
          x: 127,
          y: 38,
        },
      } as GroundDetailData,
    };
  });
}
