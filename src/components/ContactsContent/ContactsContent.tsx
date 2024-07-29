import { inst_w, tg_w, whats_w } from '../../svg/catalogSvg';
import { FormQuestion } from '../FormQuestion';
import styles from './contactscontent.module.scss';
import { motion } from 'framer-motion';

export function ContactsContent() {
  return (
    <motion.div
      initial={{ scale: 0.97 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className={styles.main} 
    >
      <div className={styles.whiteBack + ' container'}>
        <h2 className={styles.title}>Интернет-магазин “Тута Много Фрута”</h2>
        <div className={styles.coorpContent}>
          <ul className={styles.left}>
            <li>
              <a href="mailto:Malysheva.n.v.23@mail.ru">Malysheva.n.v.23@mail.ru</a>
            </li>
            <li>
              <a href="tel:+79264435413">+7 926 443 54 13</a>
            </li>
            <li>
              <span>Время работы с 9:00 до 21:00</span>
            </li>
          </ul>
          <ul className={styles.right}>
            <li>ИП Малышева Н.В.</li>
            <li>ОГРН : 323774600182476</li>
            <li>ИНН: 143520102443</li>
          </ul>
        </div>
        <div className={styles.btnsBlock}>
          <button><span>{whats_w()}</span>Whatsapp</button>
          <button><span>{tg_w()}</span>Telegram</button>
          <button><span>{inst_w()}</span>Instagram</button>
        </div>
        <div className={styles.divider}>
          <img src="https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/04/Apel.svg" alt="divider" />
        </div>
        <FormQuestion />
      </div>
    </motion.div>
  );
}
