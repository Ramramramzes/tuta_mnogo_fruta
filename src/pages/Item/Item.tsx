import styles from './item.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Item() {
  const ItemState = useSelector((state: RootState) => state.item);
  console.log(ItemState.itemId);
  
  return (
    <>
      item
    </>
  );
}
