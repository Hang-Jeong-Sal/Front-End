import Back from '../../components/common/Back';
import Menu from '../../components/common/Menu';
import Header from '../../components/page/ground/[id]';
import styles from '../../styles/ground.module.css';

export default function Ground() {
  return (
    <>
      <Header>
        <Back />
        <Menu />
      </Header>
    </>
  );
}
