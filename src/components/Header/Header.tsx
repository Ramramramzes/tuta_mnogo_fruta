import styles from './header.module.scss';
import { useNavigate } from 'react-router-dom';
import content from '../../content/Genearal/static/header.json'
import { setCurrentCatalog } from '../../store/catalog';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

export const menu = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Подарки', href: '/presents' },
  { label: 'О нас', href: '/about' },
  { label: 'Доставка', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
];

export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    if(link === '/catalog'){
      dispatch(setCurrentCatalog(''));
    }
    if(link === '/presents'){
      dispatch(setCurrentCatalog('Подарки'));
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
      <p onClick={() => navHandler('/basket')}>basket 300p</p>
    </div>
  );
}
