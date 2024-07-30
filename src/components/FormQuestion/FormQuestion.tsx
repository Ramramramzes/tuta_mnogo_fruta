import styles from './formquestion.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';

export function FormQuestion() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const inputChangeHandler = (type: string, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (type) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      case 'mail':
        setMail(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  }

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    alert(`Ваша заявка отправленна с данными ${name},${mail},${number},${message}`);
  }

  return (
    <div className={styles.formBlock}>
      <h2 className={styles.formTitle}>Задайте вопрос</h2>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <input type="text" onChange={(event) => inputChangeHandler('name', event)} value={name}  required placeholder='Имя'/>
        <input type="text" onChange={(event) => inputChangeHandler('number', event)} value={number}  required placeholder='Телефон'/>
        <input type="email" onChange={(event) => inputChangeHandler('mail', event)} value={mail}  required placeholder='Почта'/>
        <textarea onChange={(event) => inputChangeHandler('message', event)} value={message} rows={5} required placeholder='Вопрос'></textarea>
        <div className={styles.btnBlock}>
          <input className={styles.btn} type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  );
}