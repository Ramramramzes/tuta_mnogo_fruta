// import styles from './item.module.scss';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import { ItemElement } from '../../components/ItemElement';
import { LayoutBase } from '../../layout/LayoutBase';

export function Item() {
  // const ItemState = useSelector((state: RootState) => state.item);
  
  return (
    <LayoutBase>
      <ItemElement />
    </LayoutBase>
  );
}
