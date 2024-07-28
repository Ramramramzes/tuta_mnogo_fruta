import styles from './bestsellers.module.scss';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AddToBasketBtn } from '../AddToBasketBtn';
import { IProductWp } from '../../hooks/useWp';
import { AppDispatch } from '../../store/store';
import { setItemId } from '../../store/item';
import { useDispatch } from 'react-redux';


export function Bestsellers({products,superLargeDesktop,desktop,tablet,mobile,height}:{products:IProductWp[],superLargeDesktop?:number,desktop?:number,tablet?:number,mobile?:number,height?:number}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: superLargeDesktop ? superLargeDesktop : 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop ? desktop : 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: tablet ? tablet : 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobile ? mobile : 1,
    }
  };
  
  const dispatch = useDispatch<AppDispatch>();

  const navClickHandler = (id:number) => {
    dispatch(setItemId(id))
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

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
        {products.map((el:IProductWp, index: number) => {
          return (
            <div key={index} className={styles.card} style={height ? {height: `${height}vh`}: {}}>
              <Link className={styles.content + ' link'} to={'/item'} onClick={() => navClickHandler(el.id)}>
                <img src={el.images[0].src} alt="main" className={styles.img} />
                <h4 className={styles.title}>{el.name}</h4>
                <span className={styles.price}>от <span className={styles.priceLined}>{Number(el.price) * 1.2}₽ </span>{Number(el.price)}₽</span>
                <AddToBasketBtn />
              </Link>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}
