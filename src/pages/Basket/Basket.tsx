import styles from './basket.module.scss'
import { useSelector } from 'react-redux';
import { LayoutBase } from '../../layout/LayoutBase';
import { RootState } from '../../store/store';
// import { BasketItem } from '../../components/BasketItem';
import { UseBasketList } from '../../hooks/useBasketList';
import { useEffect, useState } from 'react';


export function Basket() {
  const BasketState = useSelector((state: RootState) => state.basket);
  const { item } = UseBasketList()
  // const { item, loading, error } = UseBasketList()

  const [finalBasket, setFinalBasket] = useState<IFinalBasket[]>([])

  interface IFinalBasket{
    name?: string;
    price?: number;
    size?: string;
    quantity?: number;
  }

  useEffect(() => {
    const updatedBasket: IFinalBasket[] = [];
  
    BasketState.forEach(el => {
      const found = item.filter(item => item.product.id === el.id);
      const needVariation = found[0]?.variation.find(item => item.name === el.size);
  
      const readyToPush: IFinalBasket = {
        name: found[0]?.product.name,
        price: needVariation?.price,
        size: needVariation?.name,
        quantity: el.quantity
      };
  
      updatedBasket.push(readyToPush);
    });
  
    setFinalBasket(updatedBasket);
  
  }, [BasketState, item]);
  
  console.log(finalBasket);
  
  return (
    <LayoutBase>
      {BasketState.length === 0 ?
        <span className={styles.empty}>Корзина пуста :(</span>
      :
        <div className={styles.itemBlock + ' container'}>
          {/* {BasketState.map((el,index) => (
            <BasketItem key={index} el={el} />
          ))} */}
        </div>
      }
    </LayoutBase>
  );
}
