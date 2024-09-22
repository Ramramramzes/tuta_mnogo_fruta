import styles from './basketitem.module.css';
import { IFinalBasket } from '../../interfaces/basket';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setCurrentItem, setItemId } from '../../store/item';
import { removeFromBasket } from '../../store/basket';

export function BasketItem({el,handleClose}:{el:IFinalBasket,handleClose: () => void}) {
  const dispatch = useDispatch<AppDispatch>();

  const itemNavHandler = () => {
    dispatch(setItemId(el.id))
    dispatch(setCurrentItem(el.toLink))
    handleClose()
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  const handleDel = (id?: number, size?: string) => {
    dispatch(removeFromBasket({id:id,size:size}));
  }
  
    
  return (
    <div className={styles.itemCard}>
      <Link to={'/item'} className={styles.link} onClick={itemNavHandler}>
        <img className={styles.img} src={el.img} alt="товар" />
      </Link>
      <div className={styles.itemContent}>
        <div className={styles.nameBlock}>
          <span className={styles.categories}>{el.category}</span>
          <h3 className={styles.name}>{el.name}</h3>
          <span className={styles.size}>Размер {el.size}</span>
        </div>
        <div className={styles.priceBlock}> 
          <button className={styles.btn} onClick={() => handleDel(el?.id,el?.size)}>❌</button>
          <span>{el.quantity} шт</span>
          <span className={styles.price}>{Number(el.price) * Number(el.quantity)} ₽</span>
        </div>
      </div>
    </div>
  );
}
