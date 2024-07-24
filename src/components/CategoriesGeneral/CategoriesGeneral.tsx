import styles from './categoriesgeneral.module.scss';
import categoriesData from "../../content/Genearal/general.json"
import { Link } from 'react-router-dom';
import { IGeneralData } from '../../content/Genearal/Igeneral';
export function CategoriesGeneral() {
  const navClickHandler = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  const data:IGeneralData = categoriesData;
  return (
    <div className={`container ` + styles.categoriesGeneral}>
      {data.categories.map((el, index) => {
        return(
          <Link className={`link ${styles.link}`} to={`/catalog/${el.link}`} key={index} onClick={navClickHandler}>
            <img src={el.img} alt={el.name} className={styles.img} />
            <span className={styles.title}>{el.name}</span>
          </Link>
        )
      })}
    </div>
  );
}
