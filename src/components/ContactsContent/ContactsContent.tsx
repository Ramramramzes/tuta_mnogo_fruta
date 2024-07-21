import styles from './contactscontent.module.scss';
import { motion } from 'framer-motion';

export function ContactsContent() {
  return (
    <motion.div
      initial={{ scale: 0.97 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className={styles.main + ' container'} 
    >
    <h2 className={styles.title}>Интернет-магазин “Тута Много Фрута”</h2>

    </motion.div>
  );
}
