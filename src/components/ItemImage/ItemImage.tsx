import styles from './itemimage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ImageOne, ProductVariation } from '../../hooks/useOneItem';
import { IProductWp } from '../../hooks/useWp';
import { setCurrentItem, setCurrentPrices } from '../../store/item';
import { motion } from 'framer-motion';


export function ItemImage({itemData}:{itemData:{item:ProductVariation[],loading:boolean,error:string}}){
  const CatalogState = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<AppDispatch>();
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [itemImages,setImages] = useState<ImageOne[]>([])
  const [imgIndex, setImgIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if(itemData && itemData.item.length > 0) { 
      CatalogState.allProducts.find((el:IProductWp) => {
        if(el.id === itemData.item[0].parent_id){
          dispatch(setCurrentItem(el));
          dispatch(setCurrentPrices(itemData.item));
          setImages(el.images);
        }
      })
    }
  },[itemImages,itemData.item,itemData.loading])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const imgClickHandler = (i:number) => {
    setOpacity(0)
    setTimeout(() => {
      setImgIndex(i)
      setOpacity(1)
    }, 150);
  }

  return (
    <>
      {itemImages.length > 0 ?
        <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.main}
        onMouseMove={handleMouseMove}
      >
      <div className={styles.imgBlock} style={{opacity: opacity}}>
            <img
              className={styles.mainImg}
              src={itemImages[imgIndex].src}
              alt=""
            />
            <div
              className={styles.magnifierContainer}
              style={{
                backgroundImage: `url(${itemImages[imgIndex].src})`,
                backgroundPosition: backgroundPosition,
              }}
            ></div>
        </div>
        <div className={styles.preview + ' container'}>
        {itemImages.map((img, index) => (
          <div
              onClick={() => imgClickHandler(index)}
              className={styles.previewHover}
              key={index}
              style={{
                backgroundImage: `url(${img.src})`,
              }}
            ></div>
          ))}
        </div>
    </motion.div>
    :<div style={{height:'100vh'}}></div>
      }
    </>
  );
}