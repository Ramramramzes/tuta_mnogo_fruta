import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './itemdescription.module.scss';
import { useEffect, useState } from 'react';
import { ProductVariation } from '../../hooks/useOneItem';

interface ICurrentItemData {
  name: string;
  price: number;
}

export function ItemDescription() {
  const ItemState = useSelector((state: RootState) => state.item);
  const [curentItemData,setCurentItemData] = useState<ICurrentItemData>({name:'', price: 0});
  //? ItemState.currentPrices - массив с вариативными ценниками 
  //? ItemState.currentItem - текущий объект с данными бжу и тд
  const sizeClickHandler = (name:string) => {
    const needPrice = Number(ItemState.currentPrices.filter((el:ProductVariation) => el.name === name )[0].price);
    setCurentItemData({name:name, price: needPrice});
  }

  // useEffect(() => {
  //   console.log(currentSize);
  // },[currentSize])
  //* Установка нужного формата продукта
  useEffect(() => {
    if(ItemState.currentItem.length != 0 && ItemState.currentPrices.length){
      ItemState.currentPrices[0].name != 'удалитькласс' ? 
      setCurentItemData({name:ItemState.currentPrices[0].name,price: ItemState.currentPrices[0].price})
      :
      setCurentItemData({name:ItemState.currentPrices[1].name,price: ItemState.currentPrices[1].price});
    }
  },[ItemState.currentItem, ItemState.currentPrices])
  
  console.log(ItemState.currentPrices);
  

  return (
    <>
      {ItemState.currentItem.length != 0 && ItemState.currentPrices.length != 0 &&
        <div className={styles.itemDescription}>
        <h2>{ItemState.currentItem.name}</h2>
        <span>Размер:{
          ItemState.currentPrices.map((el:ProductVariation,index:number) => {
            return el.name != 'удалитькласс' ? 
              <span key={index + el.name} onClick={() => sizeClickHandler(el.name)}>{el.name}</span>
              :<></>
          })
        }</span>

        <div>
          <span><span>{Math.round(curentItemData.price * 1.3)}₽</span> {curentItemData.price}₽</span>
        </div>
        </div>
      }
    </>
  );
}
