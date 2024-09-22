import styles from './header.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import content from '../../content/Genearal/static/header.json';
import { setCurrentCatalog, setCurrentTag, setPage } from '../../store/catalog';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { BasketCanvas } from '../BasketCanvas';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const menu = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Подарки', href: '/presents' },
  { label: 'О нас', href: '/about' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
];

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (name: string, id: number) => {
    dispatch(setCurrentCatalog(name));
    dispatch(setCurrentTag(id));
  };

  const navHandler = (link: string) => {
    if (link === '/catalog') {
      dispatch(setCurrentCatalog(''));
      dispatch(setPage(1));
    }
    if (link === '/presents') {
      handleCategoryClick('Подарки', 53);
      dispatch(setPage(1));
    }
    navigate(link);
    setMenuOpen(false);
  };

  return (
    <Navbar expand="lg" className={styles.header}>
      <Container className={styles.container}>
        <Navbar.Brand className={styles.logo} onClick={() => navigate('/')}>
          <img src={content.logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.burger}
          aria-controls="basic-navbar-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Navbar.Collapse
          className={styles.collapse}
          id="basic-navbar-nav"
          in={menuOpen}
        >
          <Nav className={styles.list + ' me-auto'}>
            {menu.map((el) => (
              <Nav.Link className={styles.item} key={el.label} onClick={() => navHandler(el.href)}>
                {el.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <BasketCanvas />
      </Container>
    </Navbar>
  );
}