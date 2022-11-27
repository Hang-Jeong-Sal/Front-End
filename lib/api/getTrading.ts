import { Ires } from '../interface/Ires';

export async function getTrading(): Promise<Ires> {
  return await new Promise((resolve) => {
    return setTimeout(() => {
      const result = {
        data: [
          {
            title: '민지네 텃밭',
            address: '서울특별시 동작구',
            price: 10000,
            likeCount: 3,
            imgUrl:
              ['https://user-images.githubusercontent.com/12531340/203138488-ab6862b0-7ac8-4092-b154-9466726eab45.png'],
          },
          {
            title: '중앙농장',
            address: '서울특별시 동작구',
            price: 10000,
            likeCount: 15,
            imgUrl:
              ['https://user-images.githubusercontent.com/12531340/203138498-ad33f399-9f58-4267-99ab-b080e80b643a.png'],
          },
        ],
      } as Ires;
      resolve(result);
    }, 2000);
  });
}
