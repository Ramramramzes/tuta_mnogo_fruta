import styles from './itemelement.module.scss';
import { useOneItem } from '../../hooks/useOneItem';
import { ItemDescription } from '../ItemDescription';
import { ItemImage } from '../ItemImage';

export function ItemElement() {
  const itemData = useOneItem();
  
  

  return (
    <div className={styles.pageContent + ' container'}>
      {itemData && <>
        <ItemImage itemData={itemData} />
        <ItemDescription />
      </>}

    </div>
  );
}
