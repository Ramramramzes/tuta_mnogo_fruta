import styles from './subscribe.module.scss';
import plane from '../../svg/plane.svg'
import mail from '../../svg/mail.svg'
import { FormEvent, useState } from 'react';
export function Subscribe() {
  const [email,setMail] = useState('');
  
  const formSend = (e:FormEvent) => {
    e.preventDefault();
    alert(`${email} subscribed`)
  };

  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  return (
    <div className={styles.subscribe}>
      <img src={plane} alt="plane" className={styles.plane_1}/>
      <img src={plane} alt="plane" className={styles.plane_2}/>
      <img src={mail} alt="mail" className={styles.mail_1}/>
      <img src={mail} alt="mail" className={styles.mail_2}/>
      <div className={styles.content}>
        <h2 className={styles.textContent}>
          Получи персональную<span className={styles.title}> скидку</span><br/>
          &amp;
          <br/>
          будь в курсе всех <span className={styles.title}>акций</span>
        </h2>
        <form className={styles.form} onSubmit={formSend}>
          <input type="email" name="email" value={email} onChange={(e) => changeMail(e)} className={styles.inpt}/>
          <input type="submit" value="Отправить" className={styles.btn}/>
        </form>
      </div>
    </div>
  )
}
