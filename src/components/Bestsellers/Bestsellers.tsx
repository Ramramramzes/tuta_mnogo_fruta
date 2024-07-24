import styles from './bestsellers.module.scss';
import data from '../../content/products.json'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AddToBasketBtn } from '../AddToBasketBtn';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface IProducts {
  products: PastilaItem[];
}

interface PastilaItem {
  name: string;
  id: number;
  catalog: string;
  bestsellers: boolean;
  type: string;
  price: {
    less: number;
    more: number;
  };
  status: string;
  images: {
    main: string;
    all: string[];
  };
  compound: string;
  bju: {
    b: number;
    j: number;
    u: number;
    kkal: number;
  };
  description: string;
  fresh: string;
}

export function Bestsellers() {
  const products: IProducts = data;

  return (
    <div className={styles.main}>
      <Carousel className={styles.bestsellers}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={false}
        showDots={false}
        arrows={false}
        pauseOnHover={false}>
        {products.products.map((el: PastilaItem, index: number) => {
          return (
            el.bestsellers && (
              <div key={`${el.images.main}_${index}`} className={styles.card}>
                <Link className='link' to={'/catalog'}>
                  <img src={el.images.main} alt="main" className={styles.img} />
                  <h4 className={styles.title}>{el.name}</h4>
                  <span className={styles.price}>от <span className={styles.priceLined}>{el.price.less * 1.2}₽ </span>{el.price.less}₽</span>
                </Link>
                <AddToBasketBtn id={el.id} />
              </div>
            )
          )
        })}
      </Carousel>
    </div>
  );
}
