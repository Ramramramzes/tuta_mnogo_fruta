import styles from './basketitem.module.css';
import { IBasketItem } from '../../store/basket';

export function BasketItem({el}:{el:IBasketItem}) {
  //? .on('input', (e) => { e.target.value = e.target.value.replace(/\D/g, '')})
  //? Собрать из этого onChange ввод, чтобы были только цифры и длнна числа 3
  
  return (
    <div className={styles.itemCard}>
      {/* <img src={el.img} alt="товар" />
      <div className={styles.itemContent}>
        <div className={styles.nameBlock}>
          <h3>{el.name}</h3>
          <input type="number" />
        </div>
        <div className={styles.priceBlock}>
          <span>{el.price * el.quantity}</span>
          <button>x</button>
        </div>
      </div> */}
    </div>
  );
}
