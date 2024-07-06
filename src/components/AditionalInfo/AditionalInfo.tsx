import styles from './aditionalinfo.module.css';
import data from '../../content/Genearal/general.json'
import { IGeneralData } from '../../content/Genearal/Igeneral';
import { Link } from 'react-router-dom';
export function AditionalInfo() {
  let generalData:IGeneralData = data;

  return (
    <div className={styles.aditionalinfo}>
      {generalData.additionalInfo.map((el) => {
        return(
          <Link className={styles.link} to={el.to}>
            <img className={styles.img} src={el.link} alt="img" />
          </Link>
        )
      })}
    </div>
  );
}
