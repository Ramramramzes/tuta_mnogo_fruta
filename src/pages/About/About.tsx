import styles from './about.module.scss'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HowWeWork } from '../../components/HowWeWork';
import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <Header />
        <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }} >
          <div className={styles.main}>
            <img className={styles.logo} src="https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/04/Logo_o-768x104.png" alt="logo" />
            <p className={styles.text_l}>Привет,меня зовут Надежда. Большинство родителей и как мама троих детей, я забочусь о здоровье своих близких. Именно для них и ради них впервые попробовала сушить пастилу. В магазинах огромное количество сладостей,а вот полезные сладости найти не просто. Так, начиная с сушки для родных появились заказы и моё хобби превратилось во что-то большее.Я увлечена не только процессом, но и результатом и теперь моя семья кушает только натуральные и полезные сладости.</p>
            <p className={styles.text_m}> Отсутствие сахара делает такие лакомства низкокалорийными. Удобство транспортировки позволяет брать с собой на работу,прогулку, в дорогу, чтобы перекусить с пользой для здоровья. Вся продукция производится без добавления каких-либо добавок и ароматизаторов.Сладость в пастиле и фрипсах обеспечивает сама природа только за счет сахара содержащегося в исходном сырье. Минимальная температура при которой сушится пастила и фрипсы позволяет сохранить все содержащиеся в свежих фруктах витамины, микроэлементы и  природные краски.</p>
            <p className={styles.text_s}>В моем ассортименте вы еще можете найти сушеные куриные колбаски и джерки,которые приготовлены из отборного мяса курицы с добавлением соли и ароматных специй.Я буду очень рада видеть вас в числе моих покупателей и гарантирую, что так вкусно и одновременно полезно вам ещё не было.</p>
            <span className={styles.certificate}>Продукция прошла <a className={styles.color} href="https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/12/Sertifikaty.pdf">сертификацию</a> декларации о соответствии <span className={styles.color}>Евразийского экономического Союза</span>.</span>
          </div>
          <HowWeWork />
        </motion.div>
      <Footer />
    </>
  );
}
