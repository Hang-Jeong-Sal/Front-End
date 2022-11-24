import { ICategory } from '../type/category';
import { getComplete } from './getComplete';
import { getEntire } from './getEntire';
import { getTrading } from './getTrading';

export function chooseAPI(cate: ICategory) {
  if (cate == '거래중') return getTrading().then((res) => res.data);
  else if (cate == '거래완료') return getComplete().then((res) => res.data);
  else return getEntire().then((res) => res.data);
}
