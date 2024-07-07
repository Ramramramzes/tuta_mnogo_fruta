import styles from './general.module.css';
import { Header } from '../../components/Header';
import { CarouselGeneral } from '../../components/CarouselGeneral';
import { AditionalInfo } from '../../components/AditionalInfo';
import { Bestsellers } from '../../components/Bestsellers';
export function General() {
  return (
    <>
      <Header />
      <CarouselGeneral />
      <AditionalInfo />
      <h2 className='title'>Хиты продаж</h2>
      <Bestsellers />
    </>
  );
}
//? Добавить компонент кнопки с добавить в корзину id + css
//? Добавить компонент Title