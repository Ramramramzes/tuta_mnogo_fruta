import styles from './catalogcard.module.scss';
import { AddToBasketBtn } from '../AddToBasketBtn';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCurrentItem, setItemId } from '../../store/item';
import { IProductWp } from '../../interfaces/product';

export function CatalogCard({el}:{el:IProductWp}) {
  const dispatch = useDispatch<AppDispatch>();
  const itemNavHandler = () => {
    dispatch(setItemId(el.id))
    dispatch(setCurrentItem(el))
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  
  return (
    <Link to={'/item'} className={styles.card} onClick={itemNavHandler}>
      <img className={styles.img} src={el.images[0].src} alt="img" />
      <div className={styles.text}>
        <h3 className={styles.title}>{el.name}</h3>
        <span className={styles.price}>от <span className={styles.priceLess}>{Math.round(Number(el.price) * 1.1)}₽</span> {Number(el.price)}₽</span>
        {el.categories.length < 2 && el.categories[0].name != 'Подарки' && el.categories[0].name != 'Наборы'  ? <p className={styles.description}>{el.description.replace(/<[^>]*>/g, '').slice(0,70) + '...'}</p> : <></>}
      </div>
      <AddToBasketBtn />
    </Link>
  );
}
