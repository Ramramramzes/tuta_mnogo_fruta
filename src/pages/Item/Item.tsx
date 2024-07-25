// import styles from './item.module.scss';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ItemElement } from '../../components/ItemElement';

export function Item() {
  // const ItemState = useSelector((state: RootState) => state.item);
  

  return (
    <>
      <Header />
      <ItemElement />
      <Footer />
    </>
  );
}
