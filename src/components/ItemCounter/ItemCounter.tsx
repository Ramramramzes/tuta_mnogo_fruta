import style from './itemcounter.module.scss'

export function ItemCounter({quantity,setQuantity}: {quantity: number,setQuantity: (num:number) => void}) {
  return (
    <div className={style.block}>
      <button className={style.minus} onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
      <span className={style.quantity}>{quantity}</span>
      <button className={style.plus} onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
