import styles from './basketbtn.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addToBasket, IBasketItem } from '../../store/basket';
import { useEffect } from 'react';

export function BasketBtn({size,quantity,id}:IBasketItem) {
  const BasketState = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToBasket({ id: id,quantity: quantity, size: size}))
  };

  useEffect(() => {
    console.log(BasketState);
  },[BasketState])

  return (
    <button className={styles.toBasket} onClick={() => handleClick()}>В корзину</button>
  );
}
