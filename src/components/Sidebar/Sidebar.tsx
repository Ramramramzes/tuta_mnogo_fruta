import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import styles from './sidebar.module.scss';
import { setCurrentCatalog }  from '../../store/catalog';

export function Sidebar() {
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = () => {
    dispatch(setCurrentCatalog("text"));
  };

  return (
    <div className={styles.sidebar}>
      
    </div>
  );
}
