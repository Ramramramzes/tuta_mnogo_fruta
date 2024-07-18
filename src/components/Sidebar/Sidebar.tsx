import styles from './sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { frips, kit, meat, pastila, presents } from '../../svg/catalogSvg';
import { setCurrentCatalog } from '../../store/catalog';


export function Sidebar() {
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = (name:string) => {
    dispatch(setCurrentCatalog(name));
  };
  
  const CatalogMenu = [
    {
      name: 'Фрипсы',
      svg: frips(),
      handler: () => (handleCategoryClick('Фрипсы')),
    },
    {
      name: 'Пастила',
      svg: pastila(),
      handler: () => handleCategoryClick('Пастила'),
    },
    {
      name: 'Мясо',
      svg: meat(),
      handler: () => handleCategoryClick('Мясо'),
    },
    {
      name: 'Наборы',
      svg: kit(),
      handler: () => handleCategoryClick('Наборы'),
    },
    {
      name: 'Подарки',
      svg: presents(),
      handler: () => handleCategoryClick('Подарки'),
    },
  ];

  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        {CatalogMenu.map((el,index) =>{
          return (
            <li  key={index} onClick={el.handler} className={styles.listItem} style={el.name === CatalogState.currentCatalog ? {
              backgroundColor: 'var(--light)',
              padding:'5px 10px',
              borderRadius: '5px',
              transform:'scale(1.1)',
            } : {}}>
              <span className={styles.menuIcon}>{el.svg}</span>{el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
