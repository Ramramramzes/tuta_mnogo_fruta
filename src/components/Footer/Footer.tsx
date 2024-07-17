import styles from './footer.module.scss';
import { menu } from '../Header';
import { useNavigate } from 'react-router-dom';
import content from '../../content/Genearal/static/footer.json'
import inst from '../../svg/inst.svg'
import tg from '../../svg/tg.svg'
import whats from '../../svg/whats.svg'

export function Footer() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.main}>
          <img className={styles.logo} onClick={() => navHandler('/')} src={content.logo} alt="logo" />
          <ul className={styles.list}>
            {menu.map((el) => {
              return (
                <li key={el.label} onClick={() => navHandler(el.href)}>{el.label}</li>
              );
            })}
          </ul>
          <div className={styles.contacts}>
            <div className={styles.icons}>
                <img onClick={() => navHandler('/')} src={inst} alt="inst" />
                <img onClick={() => navHandler('/')} src={tg} alt="tg" />
                <img onClick={() => navHandler('/')} src={whats} alt="whatsapp" />
            </div>
            <span className={styles.call}>Звоните и пишите нам<br></br>с 9 :00 до 21:00<br></br>Без выходных</span>
            <a className={styles.contactLinks} href="tel:+79264435413">+7 926 443 54 13</a>
            <a className={styles.contactLinks} href="mailto:Malysheva.n.v.23@mail.ru">Malysheva.n.v.23@mail.ru</a>
          </div>
          <div className={styles.ditales}>
            <span>ИП Малышева Н.В.</span>
            <span>ИНН: 143520102443</span>
            <span>ОГРН : 323774600182476</span>
            <span>Безопасность покупок​</span>
            <img src={content.bank} alt="bankImg" />
          </div>
        </div>
        <div className={styles.documents}>
          <span className={styles.politic} onClick={() => navHandler('/')} >Политика конфиденциальности</span>
          <span className={styles.politic} onClick={() => navHandler('/')} >Договор оферты</span>
        </div>
      </div>
    </>
  );
}
