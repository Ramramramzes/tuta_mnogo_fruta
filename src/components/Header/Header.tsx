import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import content from '../../content/header/header.json'

const menu = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Подарки', href: '/presents' },
  { label: 'О нас', href: '/about' },
  { label: 'Доставка', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
];

export function Header() {
  const navigate = useNavigate()
  const clickHandler = (link: string) => {
    navigate(link)
  }

  return (
    <div className={styles.header}>
      <img className={styles.logo} onClick={() => navigate('/')} src={content.logo} alt="" />
      <ul className={styles.list}>
        {menu.map((el) => {
          return (
            <li key={el.label} onClick={() => clickHandler(el.href)}>{el.label}</li>
          );
        })}
      </ul>
      <p>basket 300p</p>
    </div>
  );
}
