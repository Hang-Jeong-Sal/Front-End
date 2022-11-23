import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
type ICategory = '전체' | '거래중' | '거래완료';
const CategoryArray: ICategory[] = ['전체', '거래중', '거래완료'];

const Category = () => {
  const [category, setCategory] = useState<ICategory>('전체');
  return (
    <AnimatePresence>
      <Container>
        {CategoryArray.map((state: ICategory, idx: number) => (
          <StateName
            key={idx}
            onClick={() => {
              setCategory(state);
            }}
          >
            {state}
            {category === state ? <GreenLine layoutId="line" /> : null}
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
  border: 1.8px solid #005452;
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
