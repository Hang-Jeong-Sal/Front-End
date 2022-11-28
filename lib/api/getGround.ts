import { stringify } from 'querystring';
import { GroundDetailData } from '../interface/GroundData';

export async function getGround(): Promise<GroundDetailData> {
  return await new Promise((resolve) => {
    resolve({
      userId: 12,
      name: '민지네 텃밭',
      category: ['주말텃밭'],
      address: '서울특별시 동작구 상도동',
      area: 123,
      price: 5000,
      image: ['/detailPhoto.svg'],
      renderStartDate: '2022.11.15',
      renderFinishDate: '2023.05.15',
      introduction:
        '동작구 상도동에 위치한 작은 텃밭입니다~ 주말마다 오셔서 가꾸기 주시기 좋아요. 관심있는 분들은 약속잡기전에 채팅 먼저 부탁드려요 ^^',
      location: {
        x: 126.570667,
        y: 33.450701,
      },
    } as GroundDetailData);
  });
}
