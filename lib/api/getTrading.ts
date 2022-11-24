import { Ires } from '../interface/Ires';

export async function getTrading(): Promise<Ires> {
  return await new Promise((resolve) => {
    return setTimeout(() => {
      const result = {
        data: [
          {
            name: '민지네 텃밭',
            location: '서울특별시 동작구',
            price: 10000,
            like_count: 3,
            image:
              'https://user-images.githubusercontent.com/12531340/203138488-ab6862b0-7ac8-4092-b154-9466726eab45.png',
          },
          {
            name: '중앙농장',
            location: '서울특별시 동작구',
            price: 10000,
            like_count: 15,
            image:
              'https://user-images.githubusercontent.com/12531340/203138498-ad33f399-9f58-4267-99ab-b080e80b643a.png',
          },
        ],
      } as Ires;
      resolve(result);
    }, 2000);
  });
}
