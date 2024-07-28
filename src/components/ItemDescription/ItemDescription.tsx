import styles from './itemdescription.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { ProductVariation } from '../../hooks/useOneItem';
import { ItemCounter } from '../ItemCounter';

interface ICurrentItemData {
  name: string;
  price: number;
}

interface MetaData {
  id: number;
  key: string;
  value: string;
}

export function ItemDescription() {
  const ItemState = useSelector((state: RootState) => state.item);
  const [curentItemData, setCurentItemData] = useState<ICurrentItemData>({ name: '', price: 0 });
  const [quantity, setQuantity] = useState<number>(1);
  const [bjuData, setBjuData] = useState<MetaData[]>([]);
  
  const sizeClickHandler = (name: string) => {
    const needPrice = Number(ItemState.currentPrices.filter((el: ProductVariation) => el.name === name)[0].price);
    setCurentItemData({ name, price: needPrice });
  }

  useEffect(() => {
    if (ItemState.currentItem.length !== 0 && ItemState.currentPrices.length) {
      const filteredBjuData = ItemState.currentItem.meta_data.filter((el: MetaData) => el.key === 'belki' || el.key === 'zhiry' || el.key === 'uglevody' || el.key === 'kkal');
      setBjuData(filteredBjuData);

      const initialPrice = ItemState.currentPrices[0].name !== 'удалитькласс'
        ? ItemState.currentPrices[0]
        : ItemState.currentPrices[1];

      setCurentItemData({ name: initialPrice.name, price: initialPrice.price });
    }
  }, [ItemState.currentItem, ItemState.currentPrices]);

  return (
    <>
      {ItemState.currentItem.length !== 0 && ItemState.currentPrices.length !== 0 &&
        <div className={styles.itemDescription}>
          <h2 className={styles.name}>{ItemState.currentItem.name}</h2>
          <span className={styles.size}>{ItemState.currentItem.default_attributes[0].name}: <span>{curentItemData.name}</span>
          </span>

          <div className={styles.sizeBtnBlock}>
            {ItemState.currentPrices.map((el: ProductVariation, index: number) => (
              el.name !== 'удалитькласс' &&
              <span className={styles.sizeBtn} key={index + el.name} onClick={() => sizeClickHandler(el.name)} style={curentItemData.name === el.name ? {borderColor:'var(--orange)'} : {}}><span>{el.name}</span></span>
            ))}
          </div>

          <div className={styles.priceBlock}>
            <span className={styles.price}>
              <span className={styles.oldPrice}>{Math.round(curentItemData.price * 1.3)}₽</span> {curentItemData.price}₽
            </span>
          </div>
          <div className={styles.counter}>
            <ItemCounter quantity={quantity} setQuantity={setQuantity} />
            <button className={styles.toBasket}>В корзину</button>
          </div>

          <h3 className={styles.consistTitle}>Состав:</h3>
          <p className={styles.consistText}>{ItemState.currentItem.meta_data.find((el: MetaData) => el.key === 'sostav')?.value.replace(/<[^>]*>/g, '')}</p>
          
          <span className={styles.bjuTitle}>Пищевая ценность на 100гр:</span>
          <ul className={styles.bjuBlock}>
            {bjuData.map((el: MetaData) => (
              <li key={el.id}>
                <span className={styles.bjuElement}>
                  {el.key === 'belki' ? 'Белки' :
                    el.key === 'zhiry' ? 'Жиры' :
                    el.key === 'uglevody' ? 'Углеводы' :
                    el.key === 'kkal' ? 'Ккал' : el.key}
                </span>
                {el.value}<span>гр</span>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
}
