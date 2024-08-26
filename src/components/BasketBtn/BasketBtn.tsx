import styles from './basketbtn.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addToBasket, IBasketItem } from '../../store/basket';

export function BasketBtn({size,price,quantity,name,id,}:IBasketItem) {
  const BasketState = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToBasket({name: name, quantity: quantity, id: id, size: size, price: price}))
    console.log(BasketState);
  };

  return (
    <button className={styles.toBasket} onClick={() => handleClick()}>В корзину</button>
  );
}
