import styles from './itemelement.module.scss';
import { useOneItem } from '../../hooks/useOneItem';
import { ItemDescription } from '../ItemDescription';
import { ItemImage } from '../ItemImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function ItemElement() {
  const itemData = useOneItem();
  const ItemState = useSelector((state: RootState) => state.item);
  
  return (
    <div className={styles.pageContent + ' container'}>
      {itemData && <>
        <div className={styles.mainPart}>
          <ItemImage itemData={itemData} />
          <ItemDescription />
        </div>
        <h3>Описание:</h3>
        {ItemState.currentItem.description && 
          <>
          <p>{ItemState.currentItem.description.replace('<p>','').replace('</p>','')}</p>
          <p><span>Срок хранения:</span>{ItemState.currentItem.meta_data.filter((el:{id: number,key:string,value:string}) => el.key ==='srok')[0].value}</p>
          </>
        }
        <h3>Похожие товары:</h3>
      </>}
    </div>
  );
}
