import styles from './sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { frips, kit, meat, pastila, presents } from '../../svg/catalogSvg';
import { setCurrentCatalog, setPage } from '../../store/catalog';


export function Sidebar({loading}:{loading: boolean}) {
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryClick = (name:string) => {
    dispatch(setCurrentCatalog(name));
  };
  
  const CatalogMenu = [
    {
      name: 'Фрипсы',
      svg: frips(),
      handler: () => {
        if(!loading){
          handleCategoryClick('Фрипсы')
          dispatch(setPage(1))
        }
      },
    },
    {
      name: 'Пастила',
      svg: pastila(),
      handler: () => {
        if(!loading){
          handleCategoryClick('Пастила')
          dispatch(setPage(1))
        }
      },
    },
    {
      name: 'Мясо',
      svg: meat(),
      handler: () => {
        if(!loading){
          handleCategoryClick('Мясо')
          dispatch(setPage(1))
        }
      },
    },
    {
      name: 'Наборы',
      svg: kit(),
      handler: () => {
        if(!loading){
          handleCategoryClick('Наборы')
          dispatch(setPage(1))
        }
      },
    },
    {
      name: 'Подарки',
      svg: presents(),
      handler: () => {
        if(!loading){
          handleCategoryClick('Подарки')
          dispatch(setPage(1))
        }
      },
    },
  ];

  return (
    <div className={styles.sidebar}>
      <ul className={styles.list} style={loading ? {filter: 'grayscale(1)'} : {}}>
        {CatalogMenu.map((el,index) =>{
          return (
            <li  key={index} onClick={el.handler} className={styles.listItem} style={el.name === CatalogState.currentCatalog && !loading ? {
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
