import { CarouselGeneral } from '../../components/CarouselGeneral';
import { AditionalInfo } from '../../components/AditionalInfo';
import { Bestsellers } from '../../components/Bestsellers';
import { OurProductGeneral } from '../../components/OurProductGeneral';
import { CategoriesGeneral } from '../../components/CategoriesGeneral';
import { SaleGeneral } from '../../components/SaleGeneral';
import { Subscribe } from '../../components/Subscribe';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LayoutBase } from '../../layout/LayoutBase';
import { IProductWp } from '../../interfaces/product';
import { useCatalogApi } from '../../hooks/useCatalogApi';
import { useEffect } from 'react';
export function General() {
  const { loading, getAllCatalog } = useCatalogApi();

  useEffect(() => {
    getAllCatalog()
  },[])

  const CatalogState = useSelector((state: RootState) => state.catalog);
  const bestSellers = CatalogState.allProducts.filter((el:IProductWp) => el.featured)
  
  return (
    !loading ? 
    <LayoutBase mainPage={true}>
      <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1 , opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }} >
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
    </LayoutBase>
    :
    <div className={'loader-block-full'}><span className='loader'></span></div>
  );
}