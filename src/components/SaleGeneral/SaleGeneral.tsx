import { useState } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import styles from './salegeneral.module.css';

export function SaleGeneral() {
  const [key, setKey] = useState(0);

  const handleComplete = () => {
    setKey(prevKey => prevKey + 1);
  };

  const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      handleComplete();
    } else {
      return (
        <div>
          <span className={styles.hours}>{Number(hours) < 10 ? '0' : ''}{hours}</span>:<span>{Number(minutes) < 10 ? '0' : ''}{minutes}</span>:<span className={styles.seconds}>{Number(seconds) < 10 ? '0' : ''}{seconds}</span>
        </div>
      );
    }
  };

  return (
    <div className={styles.saleGeneral}>
      <Countdown
        key={key} // Устанавливаем ключ для компонента
        date={Date.now() + 12500100}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}