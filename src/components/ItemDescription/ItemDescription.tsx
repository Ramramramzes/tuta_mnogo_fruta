import styles from './itemdescription.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { ProductVariation } from '../../hooks/useOneItem';
import { ItemCounter } from '../ItemCounter';

interface ICurrentItemData {
  name: string;
  price: number;
}

export function ItemDescription() {
  //? ItemState.currentPrices - массив с вариативными ценниками 
  //? ItemState.currentItem - текущий объект с данными бжу и тд
  const ItemState = useSelector((state: RootState) => state.item);
  const [curentItemData,setCurentItemData] = useState<ICurrentItemData>({name:'', price: 0});
  const [quantity, setQuantity] = useState<number>(1);
  const [bjuData,setBjuData] = useState<{id: number,name:string,value:string}[]>([]);
  
  const sizeClickHandler = (name:string) => {
    const needPrice = Number(ItemState.currentPrices.filter((el:ProductVariation) => el.name === name )[0].price);
    setCurentItemData({name:name, price: needPrice});
    console.log(bjuData);
    
  }

  //* Установка нужного формата продукта
  useEffect(() => {
    if(ItemState.currentItem.length != 0 && ItemState.currentPrices.length){
      setBjuData(ItemState.currentItem.meta_data.filter((el:{id:number,key:string,value:string}) => el.key === 'belki' || el.key === 'zhiry' || el.key === 'uglevody' || el.key === 'kkal'))
      ItemState.currentPrices[0].name != 'удалитькласс' ? 
      setCurentItemData({name:ItemState.currentPrices[0].name,price: ItemState.currentPrices[0].price})
      :
      setCurentItemData({name:ItemState.currentPrices[1].name,price: ItemState.currentPrices[1].price});
    }
  },[ItemState.currentItem, ItemState.currentPrices])
  
  // console.log(ItemState.currentItem);

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
            <span>{curentItemData.name}</span>
          </div>

          <div>
            <span><span>{Math.round(curentItemData.price * 1.3)}₽</span> {curentItemData.price}₽</span>
          </div>
          <div>
            <ItemCounter quantity={quantity} setQuantity={setQuantity} />
            <button>В корзину</button>
          </div>
          <h3>Состав:</h3>
          <p>{ItemState.currentItem.meta_data.filter((el:{id:number,key:string,value:string}) => el.key === 'sostav')[0].value}</p>
          
          <span>Пищевая ценность на 100гр:</span>
          <ul>
            {bjuData.map(el => <li key={el.id} className={styles.bjuData}>{el.value}<span>гр</span></li>)}
          </ul>

        </div>
      }
    </>
  );
}
