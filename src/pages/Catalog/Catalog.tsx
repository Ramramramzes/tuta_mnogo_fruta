import styles from './catalog.module.scss'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useProducts } from '../../hooks/useProducts';

export function Catalog() {
  const navigate = useNavigate()

  const navHandler = (link: string) => {
    navigate(link)
  }

  const products = useProducts();
  
  return (
    <div className={styles.catalog}>
      <Header />
        <div className={styles.main}>
          <Sidebar />
          {products && products.map((el) => {
            return (
              el.id
            )
          })}
        </div>
      <Footer />
    </div>
  );
}
