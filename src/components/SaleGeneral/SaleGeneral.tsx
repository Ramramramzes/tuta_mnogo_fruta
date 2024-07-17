import styles from './salegeneral.module.scss';
import { Timer } from '../Timer';
import { AddToBasketBtn } from '../AddToBasketBtn';
import sellsData from '../../content/sells.json';
import { ISells } from '../../content/ISells';


export function SaleGeneral() {
  const data:ISells = sellsData;

  return (
    <div className={styles.saleGeneral}>
      <div className={styles.timerBlock}>
        <h3 className={styles.sellsTitle}>Акционное <br/>предложени</h3>
        <p className={styles.sellsText}>Скидки до 30% на все товары</p>
        <Timer delay={12500000}/>
      </div>
      <div className={styles.cardBlock}>
        <div className={styles.card}>
          <img src={data.sells.images.main} alt={data.sells.name} className={styles.img}/>
          <div className={styles.textContent}>
            <h3 className={styles.title}>{data.sells.name}</h3>
            <p className={styles.description}>{data.sells.description}</p>
            <span className={styles.price}>от <span className={styles.priceLined}>{data.sells.price.less * 2}₽ </span>{data.sells.price.less}₽</span>
            <AddToBasketBtn id={data.sells.id} />
          </div>
        </div>
      </div>
    </div>
  )
}