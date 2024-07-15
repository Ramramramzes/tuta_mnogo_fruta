import Countdown, { CountdownRenderProps } from 'react-countdown';
import styles from './timer.module.scss';
import { useState } from 'react';

export function Timer({delay}:{delay:number}) {
  const [key, setKey] = useState(0);

  const handleComplete = () => {
    setKey(prevKey => prevKey + 1);
  };

  const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      handleComplete();
    } else {
      return (
        <div style={{display:'flex'}}>
          <div className={styles.timerBlock}>
            <span className={styles.time}>{Number(hours) < 10 ? '0' : ''}{hours}</span>
            <span className={styles.downBlock}>часов</span>
          </div>
          <div className={styles.timerBlock}>
            <span className={styles.time}>{Number(minutes) < 10 ? '0' : ''}{minutes}</span>
            <span className={styles.downBlock}>минут</span>
          </div>
          <div className={styles.timerBlock}>
            <span className={styles.time}>{Number(seconds) < 10 ? '0' : ''}{seconds}</span>
            <span className={styles.downBlock}>секунд</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.saleGeneral}>
      <Countdown
        key={key} // Устанавливаем ключ для компонента
        date={Date.now() + delay}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}
