import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import category from '../../../atoms/category';
import { TCategory } from '../../../lib/type/TCategory';

const CategoryArray: TCategory[] = ['전체', '거래중', '거래완료'];

const Category = () => {
  const [cate, setCate] = useRecoilState<TCategory>(category);
  return (
    <AnimatePresence>
      <Container>
        {CategoryArray.map((state: TCategory, idx: number) => (
          <StateName
            key={idx}
            onClick={() => {
              setCate(state);
            }}
          >
            {state}
            {cate === state ? <GreenLine layoutId="line" /> : null}
          </StateName>
        ))}
      </Container>
    </AnimatePresence>
  );
};
const GreenLine = styled(motion.div)`
  position: absolute;
  top: 34px;
  width: 100%;
  z-index: 9999;
  height: 3px;
  background-color: #005452;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const StateName = styled(motion.div)`
  position: relative;
  display: flex;
  flex-basis: 33%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #545454;
  padding: 2px;
  padding-bottom: 10px;
  border-bottom: 1px #ededed solid;
`;
export default Category;
