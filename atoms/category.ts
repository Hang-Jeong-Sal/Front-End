import { atom } from 'recoil';
type ICategory = '전체' | '거래중' | '거래완료';
const category = atom<ICategory>({
  key: 'category',
  default: '전체',
});
export default category;
