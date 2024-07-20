import styles from './catalogcard.module.scss';
import { PastilaItem } from '../../content/IProducts';
import { AddToBasketBtn } from '../AddToBasketBtn';

export function CatalogCard({el}:{el:PastilaItem}) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={el.images.main} alt="img" />
      <div className={styles.text}>
        <h3 className={styles.title}>{el.name}</h3>
        <span className={styles.price}>от <span className={styles.priceLess}>{Math.round(el.price.less * 1.1)}₽</span> {el.price.less}₽</span>
        <p className={styles.description}>{el.description.slice(0,70) + '...'}</p>
      </div>
      <AddToBasketBtn id={el.id} />
    </div>
  );
}
