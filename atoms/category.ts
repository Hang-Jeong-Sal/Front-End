import { atom } from 'recoil';
import { ICategory } from '../lib/type/category';

const category = atom<ICategory>({
  key: 'category',
  default: '전체',
});
export default category;
