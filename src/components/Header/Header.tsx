import styles from './header.module.scss';
import { useNavigate } from 'react-router-dom';
import content from '../../content/Genearal/static/header.json'
import { setCurrentCatalog, setPage } from '../../store/catalog';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { BasketCanvas } from '../BasketCanvas';

export const menu = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Подарки', href: '/presents' },
  { label: 'О нас', href: '/about' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
];

export function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();

  const navHandler = (link: string) => {
    if(link === '/catalog'){
      dispatch(setCurrentCatalog(''));
      dispatch(setPage(1));
    }
    if(link === '/presents'){
      dispatch(setCurrentCatalog('Подарки'));
      dispatch(setPage(1));
    }
    navigate(link)
  }

  return (
    <div className={styles.header}>
      <img className={styles.logo} onClick={() => navigate('/')} src={content.logo} alt="" />
      <ul className={styles.list}>
        {menu.map((el) => {
          return (
            <li key={el.label} onClick={() => navHandler(el.href)}>{el.label}</li>
          );
        })}
      </ul>
      <BasketCanvas />
    </div>
  );
}
