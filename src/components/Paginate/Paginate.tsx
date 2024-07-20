// Paginate.tsx
import ReactPaginate from 'react-paginate';
import styles from './paginate.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setPage } from '../../store/catalog';

export function Paginate() {
  const dispatch = useDispatch<AppDispatch>();
  const CatalogState = useSelector((state: RootState) => state.catalog);

  const handlePageClick = (selectedItem: { selected: number }) => {
    dispatch(setPage(Number(selectedItem.selected+1)));
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <ReactPaginate
      className={styles.paginate}
      previousLabel={''}
      nextLabel={''}
      breakLabel={'...'}
      breakClassName={styles.break}
      pageCount={CatalogState.pagesLimit}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      pageClassName={styles.page}
      previousClassName={styles.hidden}
      nextClassName={styles.hidden}
      breakLinkClassName={styles.page}
      forcePage={CatalogState.page - 1}
    />
  );
}
