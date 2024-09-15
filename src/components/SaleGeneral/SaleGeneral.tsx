import styles from './salegeneral.module.scss';
import { Timer } from '../Timer';
import { AddToBasketBtn } from '../AddToBasketBtn';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { IProductWp } from '../../interfaces/product';
import { useDispatch } from 'react-redux';
import { setCurrentItem, setItemId } from '../../store/item';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function SaleGeneral() {
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<AppDispatch>();
  const [data,setData] = useState<IProductWp>();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setData(CatalogState.allProducts.filter((el:IProductWp) => el.name === 'Апельсин')[0]);
  }, [CatalogState.allProducts])

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (id: number) => {
    dispatch(setItemId(id));
    dispatch(setCurrentItem(data));
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100)
  }

  return (
    <>
    {data && <div className={styles.saleGeneral}>
                    <div className={styles.timerBlock}>
                      <h3 className={styles.sellsTitle}>Акционное <br/>предложени</h3>
                      <p className={styles.sellsText}>Скидки до 30% на все товары</p>
                      <Timer delay={12500000}/>
                    </div>
                    <div className={styles.cardBlock}>
                      <div className={styles.card}>
                        <img src={data.images[0].src} alt={data.name} className={styles.img}/>
                        <div className={styles.textContent}>
                          <h3 className={styles.title}>{data.name}</h3>
                          <p className={styles.description}>{screenWidth < 500 ?data.description.replace(/<[^>]*>/g, '').slice(0,60) + '...' : data.description.replace(/<[^>]*>/g, '')}</p>
                          <span className={styles.price}>от <span className={styles.priceLined}>{Number(data.price) * 2}₽ </span>{Number(data.price)}₽</span>
                          <Link to='/item' onClick={() => handleClick(data.id)}>
                            <AddToBasketBtn />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
    }
    </>
  )
}