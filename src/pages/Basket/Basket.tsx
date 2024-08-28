import styles from './basket.module.scss'
import { useSelector } from 'react-redux';
import { LayoutBase } from '../../layout/LayoutBase';
import { RootState } from '../../store/store';
import { BasketItem } from '../../components/BasketItem';

export function Basket() {
  const BasketState = useSelector((state: RootState) => state.basket);
  console.log(BasketState);
  
  return (
    <LayoutBase>
      {BasketState.length === 0 ?
        <span className={styles.empty}>Корзина пуста :(</span>
      :
        <div className={styles.itemBlock + ' container'}>
          {BasketState.map((el,index) => (
            <BasketItem key={index} el={el} />
          ))}
        </div>
      }
    </LayoutBase>
  );
}
