import { Header } from '../../components/Header';
import { CarouselGeneral } from '../../components/CarouselGeneral';
import { AditionalInfo } from '../../components/AditionalInfo';
import { Bestsellers } from '../../components/Bestsellers';
import { OurProductGeneral } from '../../components/OurProductGeneral';
import { CategoriesGeneral } from '../../components/CategoriesGeneral';
import { SaleGeneral } from '../../components/SaleGeneral';
import { Subscribe } from '../../components/Subscribe';
import { Footer } from '../../components/Footer';
import { motion } from 'framer-motion';
import { useWp } from '../../hooks/useWp';
export function General() {
  useWp();
  
  return (
    <div>
      <Header />
      <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1 , opacity: 1 }}
      transition={{ duration: 0.4 }} >
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
      </motion.div>
      <Footer />
    </div>
  );
}