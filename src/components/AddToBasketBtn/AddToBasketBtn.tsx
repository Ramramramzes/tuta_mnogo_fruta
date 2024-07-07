import styles from './addtobasketbtn.module.css';

export function AddToBasketBtn({id}:{id:number}) {
  return (
    <button className={styles.btn} onClick={()=>{
        console.log(id);
      }}>Добавить в корзину</button>
  );
}
