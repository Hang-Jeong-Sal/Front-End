import { atom } from 'recoil';
const category = atom({
  key: 'category',
  default: '전체',
});
export default category;
