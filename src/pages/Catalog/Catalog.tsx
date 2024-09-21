import styles from './catalog.module.scss'
import { Sidebar } from '../../components/Sidebar';
import { CatalogCard } from '../../components/CatalogCard';
import { Paginate } from '../../components/Paginate';
import { motion } from 'framer-motion';

import { LayoutBase } from '../../layout/LayoutBase';
import { useCatalogApi } from '../../hooks/useCatalogApi';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export function Catalog() {
  const CatalogState = useSelector((state: RootState) => state.catalog);

  const { getPageCatalog, pageCatalog, categoryCatalog, getCatalogCategory, totalPages , loading } = useCatalogApi();

  useEffect(() => {
    CatalogState.currentCatalog === '' && getPageCatalog(CatalogState.page);
    CatalogState.currentCatalog && CatalogState.tag !== null  && getCatalogCategory(CatalogState.tag,CatalogState.page);
  }, [CatalogState.page,CatalogState.currentCatalog]);



  return (
    <LayoutBase>
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.main} style={loading ? {height: '100vh'} : {}}>
          <Sidebar loading={loading}/>
          {!loading ? 
          <>
            {CatalogState.currentCatalog === '' ?
              <div className={styles.contentBlock}>
                <div className={styles.catalogItems}>
                  {pageCatalog && pageCatalog.map((el) => {
                    return (
                      <CatalogCard key={el.id} el={el} />
                    )
                  })}
                </div>
                <div className={styles.pagination}>
                  <Paginate totalPages={totalPages} />
                </div>
              </div>
              :
              <div className={styles.contentBlock}>
                <div className={styles.catalogItems}>
                  {categoryCatalog && categoryCatalog.map((el) => {
                    return (
                      <CatalogCard key={el.id} el={el} />
                    )
                  })}
                </div>
                <div className={styles.pagination}>
                  <Paginate totalPages={totalPages} />
                </div>
              </div>
            }
          </>
          :
          <div className='loader-block'><span className='loader'></span></div>}
        </motion.div>
    </LayoutBase>
  );
}
