import styles from './itemelement.module.scss';
import { useOneItem } from '../../hooks/useOneItem';
import { ItemDescription } from '../ItemDescription';
import { ItemImage } from '../ItemImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IProductWp } from '../../hooks/useWp';
import { useEffect, useState } from 'react';
import { Bestsellers } from '../Bestsellers';

export function ItemElement() {
  const itemData = useOneItem();
  const ItemState = useSelector((state: RootState) => state.item);
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const [sameProducts, setSameProducts] = useState<IProductWp[]>([]);

  useEffect(() => {
    if(ItemState.currentItem.categories){
      setSameProducts(CatalogState.allProducts && CatalogState.allProducts.filter((el:IProductWp) => {
        return el.categories.some((category: any) => category.name == ItemState.currentItem.categories[0].name);}))
    }
  },[itemData.loading])

  return (
    <>
    {!itemData.loading ? 
      <>
        <div className={styles.pageContent + ' container'}>
          {itemData && <>
            <div className={styles.mainPart}>
              <ItemImage itemData={itemData} />
              <ItemDescription />
            </div>
            <div className={styles.descriptionBlock}>
              <h3 className={styles.descriptionTitle}>Описание:</h3>
              {ItemState.currentItem.description && 
                <>
                  <p className={styles.description}>{ItemState.currentItem.description.replace(/<[^>]*>/g, '')}</p>
                  <p><span className={styles.srokTitle}>Срок хранения:</span>{ItemState.currentItem.meta_data.filter((el:{id: number,key:string,value:string}) => el.key ==='srok')[0].value}</p>
                </>
              }
              <h3 className={styles.same}>Похожие товары:</h3>
            </div>
          </>}
        </div>
        <div className={styles.bestBlock}>
          <Bestsellers products={sameProducts} desktop={4} height={70} />
        </div>
      </>
      :
      <div className={styles.loaderBlock + ' loader-block'}><span className='loader'></span></div>}
    </>
  );
}
