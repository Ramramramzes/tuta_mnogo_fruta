import styles from './catalogcard.module.scss';
import { AddToBasketBtn } from '../AddToBasketBtn';
import { IProductWp } from '../../hooks/useWp';

export function CatalogCard({el}:{el:IProductWp}) {
  
  return (
    <div className={styles.card}>
      <img className={styles.img} src={el.images[0].src} alt="img" />
      <div className={styles.text}>
        <h3 className={styles.title}>{el.name}</h3>
        <span className={styles.price}>от <span className={styles.priceLess}>{Math.round(Number(el.price) * 1.1)}₽</span> {Number(el.price)}₽</span>
        {el.categories.length < 2 && el.categories[0].name != 'Подарки' && el.categories[0].name != 'Наборы'  ? <p className={styles.description}>{el.description.replace('<p>','').replace('/p','').slice(0,70) + '...'}</p> : <></>}
      </div>
      <AddToBasketBtn id={el.id} />
    </div>
  );
}
