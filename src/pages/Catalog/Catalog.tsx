import styles from './catalog.module.scss'
import { Sidebar } from '../../components/Sidebar';
import { CatalogCard } from '../../components/CatalogCard';
import { Paginate } from '../../components/Paginate';
import { motion } from 'framer-motion';
import { useWp } from '../../hooks/useWp';
import { LayoutBase } from '../../layout/LayoutBase';

export function Catalog() {
  const products = useWp();
  return (
    <LayoutBase>
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.main} style={products.loading ? {height: '100vh'} : {}}>
          <Sidebar loading={products.loading}/>
          {!products.loading ? <div className={styles.contentBlock}>
                                <div className={styles.catalogItems}>
                                  {products && products.products.map((el) => {
                                    return (
                                      <CatalogCard key={el.id} el={el} />
                                    )
                                  })}
                                </div>
                                <div className={styles.pagination}>
                                  <Paginate />
                                </div>
                              </div>
                              :
                              <div className='loader-block'><span className='loader'></span></div>}
        </motion.div>
    </LayoutBase>
  );
}
