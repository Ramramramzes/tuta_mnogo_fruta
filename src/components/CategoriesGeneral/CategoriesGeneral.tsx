import styles from './categoriesgeneral.module.scss';
import categoriesData from "../../content/Genearal/general.json"
import { Link } from 'react-router-dom';
import { IGeneralData } from '../../content/Genearal/Igeneral';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCurrentCatalog, setCurrentTag } from '../../store/catalog';
import { useEffect } from 'react';

const categoryData = [
    {
      name: 'Фрипсы',
      id: 25
    },
    {
      name: 'Пастила',
      id: 28
    },
    {
      name: 'Мясо',
      id: 29
    },
    {
      name: 'Наборы',
      id: 48
    },
  ]

export function CategoriesGeneral() {
  const dispatch = useDispatch<AppDispatch>();
  const data:IGeneralData = categoriesData;
  
  useEffect(() => {
    console.log(categoriesData);
  },[data])
  

  const navClickHandler = (name:string,id:number) => {
    dispatch(setCurrentCatalog(name));
    dispatch(setCurrentTag(id));
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  return (
    <div className={`container ` + styles.categoriesGeneral}>
      {data.categories.map((el, index) => {
        return(
          <Link className={`link ${styles.link}`} to={`/catalog`} key={index} onClick={() => {
            const category = categoryData.find(item => el.name === item.name);
            if (category) {
              navClickHandler(el.name, category.id);
            }
          }}>
            <img src={el.img} alt={el.name} className={styles.img} />
            <span className={styles.title}>{el.name}</span>
          </Link>
        )
      })}
    </div>
  );
}
