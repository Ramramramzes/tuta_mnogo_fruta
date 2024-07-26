import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './itemdescription.module.scss';

export function ItemDescription() {
  const ItemState = useSelector((state: RootState) => state.item);
  //? ItemState.currentPrices - массив с вариативными ценниками 
  //? ItemState.currentItem - текущий объект с данными бжу и тд
  
  console.log(ItemState.currentPrices);
  
  return (
    <>
      {ItemState.currentItem.name != '' &&
        <div className={styles.itemDescription}>
        <h2>{ItemState.currentItem.name}</h2>
        </div>
      }
    </>
  );
}
