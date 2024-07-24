import styles from './deliverycontent.module.scss';
import { motion } from 'framer-motion';

export function DeliveryContent() {
  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={styles.main + ' container'} 
    >
    <h2 className={styles.title}>Доставка и оплата</h2>
    <p className={styles.text}>
      Доставка осуществляется по всей территории Российской Федерации и стран СНГ через курьерскую службу Boxberry по транспортным тарифам.<br/><br/>
      Товар может быть доставлен до двери клиента так и до пункта выдачи Boxberry.<br/><br/>
      Самовывоз осуществляется по адресу: г. Балашиха, ул.Майкла Лунна д.3 с 10.00 до 20.00 каждый день, без обеда и выходных.<br/><br/>
      Срок изготовления составляет от 3 до 5 дней,но в праздничные дни может увеличиться до 7 дней. Это связано с тем, что заказы готовятся индивидуально. Я не храню продукцию,а делаю под заказ для вас. Будьте уверены, ваш набор не лежал на складе,а был изготовлен в ближайшие дни. Но иногда в наличии бывает некоторые виды пастилы и фрипсов, просто напишите мне и я помогу вам собрать заказ из наличия ассортимента и вам не придётся долго ждать.<br/><br/>
      Оплата возможна только банковской картой
    </p>
    <img className={styles.img} src="https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/04/oplata.png" alt="img" />
    </motion.div>
  );
}
