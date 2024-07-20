import styles from './catalog.module.scss'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useProducts } from '../../hooks/useProducts';
import { CatalogCard } from '../../components/CatalogCard';
import { Paginate } from '../../components/Paginate';
import { motion } from 'framer-motion';

export function Catalog() {
  const navigate = useNavigate()
  
  const navHandler = (link: string) => {
    navigate(link)
  }

  const products = useProducts();
  
  
  return (
    <div
    className={styles.catalog}>
      <Header />
        <motion.div
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.main} style={products ? {height: '100vh'} : {}}>
          <Sidebar />
          <div className={styles.contentBlock}>
            <div className={styles.catalogItems}>
              {products && products.map((el) => {
                return (
                  <CatalogCard key={el.id + Math.random()} el={el} />
                )
              })}
            </div>
            <div className={styles.pagination}>
              <Paginate />
            </div>
          </div>
        </motion.div>
      <Footer />
    </div>
  );
}
