import styles from './general.module.css';
import { Header } from '../../components/Header';
import { CarouselGeneral } from '../../components/CarouselGeneral';
import { AditionalInfo } from '../../components/AditionalInfo';
import { Bestsellers } from '../../components/Bestsellers';
import { OurProductGeneral } from '../../components/OurProductGeneral';
import { CategoriesGeneral } from '../../components/CategoriesGeneral';
import { SaleGeneral } from '../../components/SaleGeneral';
import { Subscribe } from '../../components/Subscribe';
export function General() {
  return (
    <>
      <Header />
      <CarouselGeneral />
      <AditionalInfo />
      <h2 className='title'>Хиты продаж</h2>
      <Bestsellers />
      <h2 className='title'>Наша пастила</h2>
      <OurProductGeneral />
      <h2 className='title'>Категории</h2>
      <CategoriesGeneral />
      <SaleGeneral />
      <Subscribe />
    </>
  );
}