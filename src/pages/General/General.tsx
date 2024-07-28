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
import { IProductWp, useWp } from '../../hooks/useWp';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export function General() {
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const bestSellers = CatalogState.allProducts.filter((el:IProductWp) => el.featured)
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
        <Bestsellers products={bestSellers}/>
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