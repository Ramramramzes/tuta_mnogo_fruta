import { useEffect, useState } from 'react';
import styles from './howwework.module.scss';

type HowState = 'Свежие продукты' | 'Упаковка' | 'Доставка';
type Idata = {
  [howState in HowState]: {
    text: string;
    img1: string;
    img2: string;
  };
};


export function HowWeWork() {
  const [howState, setHowState] = useState<HowState>('Свежие продукты');
  const data:Idata = {
    "Свежие продукты":{
      "text": "Для своей продукции я выбираю только самые качественные продукты. Закупка происходит небольшими партиями, будьте уверены, ваш заказ приготовлен за 2-3 дня. Всё тщательно моется, готовится, сушится и упаковывается для того, чтобы вы получили качественный товар для себя и своих близких.",
      "img1": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-01-at-13.45.39.jpeg",
      "img2": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-01-at-13.45.39-1.jpeg"
    },
    "Упаковка":{
      "text": "Ваш заказ будет упакован в крафтовые коробочки или пакеты, мясо и колбаски вакуумируются для сохранения свежести и аромата. Наборы можно дополнить открыткой и лентой- укажите это в комментариях при оформлении заказа.",
      "img1": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-02-at-15.44.12.jpeg",
      "img2": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-02-at-15.44.12-1.jpeg"
    },
    "Доставка":{
      "text": "Доставка осуществляется по всей территории Российской Федерации и стран СНГ через курьерскую службу Boxberry по транспортным тарифам. Товар может быть доставлен до двери клиента и до пункта выдачи Boxberry.",
      "img1": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/Prochie_trebovaniya.png",
      "img2": "https://tuta-mnogo-fruta.ru/wp-content/uploads/2023/06/800x400_boxberry-ru___png____4_678a4230-e1685722062541.png"
    }
  }

const handleClick = (string: HowState) => {
  setHowState(string);
}

  return (
    <>
      <h2 className='title'>Как мы работаем</h2>
      <div className={styles.tabs}>
        <div className={styles.btns}>
          <span onClick={() => handleClick('Свежие продукты')} style={howState == 'Свежие продукты' ? {backgroundColor:'var(--orange', color: 'white'}:{}}>Свежие продукты</span>
          <span onClick={() => handleClick('Упаковка')} style={howState == 'Упаковка' ? {backgroundColor:'var(--orange', color: 'white'}:{}}>Упаковка</span>
          <span onClick={() => handleClick('Доставка')} style={howState == 'Доставка' ? {backgroundColor:'var(--orange', color: 'white'}:{}}>Доставка</span>
        </div>
        <div className={styles.tabsContent}>
          <img className={styles.img} src={data[howState].img1} alt="photo" style={howState == 'Доставка' ? {width: '30%'}: {}}/>
          <p className={styles.text}>{data[howState].text}</p>
          <img className={styles.img} src={data[howState].img2} alt="photo" style={howState == 'Доставка' ? {width: '25%'}: {}}/>
        </div>
      </div>
    </>
  );
}