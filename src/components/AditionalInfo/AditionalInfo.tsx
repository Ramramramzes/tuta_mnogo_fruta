import styles from './aditionalinfo.module.scss';
import data from '../../content/Genearal/general.json'
import { IGeneralData } from '../../content/Genearal/Igeneral';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCurrentCatalog } from '../../store/catalog';
export function AditionalInfo() {
  let generalData:IGeneralData = data;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.aditionalinfo}>
      {generalData.additionalInfo.map((el,index) => {
        return(
          <Link className={styles.link} to={el.to} key={index} onClick={() => {
            if (el.to === '/catalog'){
              dispatch(setCurrentCatalog('Наборы'));
            }
            if (el.to === '/presents'){
              dispatch(setCurrentCatalog('Подарки'));
            }
          }}>
            <img className={styles.img} src={el.link} alt="img" />
          </Link>
        )
      })}
    </div>
  );
}
