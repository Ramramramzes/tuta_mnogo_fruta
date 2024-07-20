import styles from './catalog.module.scss'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useProducts } from '../../hooks/useProducts';
import { CatalogCard } from '../../components/CatalogCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { setPage } from '../../store/catalog';

export function Catalog() {
  const navigate = useNavigate()
  const [pagination, setPagination] = useState<Number[]>([]) 
  const dispatch = useDispatch<AppDispatch>();
  const CatalogState = useSelector((state: RootState) => state.catalog);
  
  const navHandler = (link: string) => {
    navigate(link)
  }
  
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= CatalogState.pagesLimit; i++) {
      pages.push(i);
    }
    setPagination(pages);
    if(CatalogState.pagesLimit === 0) {
      dispatch(setPage(1));
    }
    
  }, [CatalogState.pagesLimit]);

  const products = useProducts();
  
  
  return (
    <div className={styles.catalog}>
      <Header />
        <div className={styles.main}>
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
              {pagination.map((el,index) => {
                return <span className={styles.pagination} onClick={() => {
                  dispatch(setPage(el))
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} key={index}>{el.toString()}</span>
              })}
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
