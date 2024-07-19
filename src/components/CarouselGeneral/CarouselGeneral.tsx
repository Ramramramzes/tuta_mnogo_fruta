import styles from './carouselgeneral.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import slidesData from '../../content/Genearal/general.json'
import { IGeneralData } from '../../content/Genearal/Igeneral';
import { Link } from 'react-router-dom';
import { setCurrentCatalog } from '../../store/catalog';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
export function CarouselGeneral() {
  const slides:IGeneralData = slidesData;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Carousel indicators={false} pause={false}>
        {slides.slider.map((el,index) => {
          return(
            <Carousel.Item key={index} className={styles.caruselItem}> 
              <img src={el.image} className={styles.img}/>
              <Carousel.Caption className={styles.carouselCaption} style={index === 0 ? {textAlign: 'left'} : index === 1 ? {textAlign: 'right',alignItems: 'right'} : {textAlign: 'center'}}>
                  <h3 className={styles.caruselTitle}>{el.title}</h3>
                  <p className={styles.caruselDescription}>{el.description}</p>
                  <div className={styles.btnBlock} style={index === 0 ? {justifyContent: 'left'} : index === 1 ? {justifyContent: 'right'} : {}}>
                    {index != 2 ? <Link className={'link ' + styles.btn} to={'/catalog'} onClick={() => dispatch(setCurrentCatalog(''))}>Подробнее</Link> : ''}
                  </div>
                </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
    
  );
}

