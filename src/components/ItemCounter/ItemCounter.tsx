// import style from './itemcounter.module.scss'
export function ItemCounter({quantity,setQuantity}: {quantity: number,setQuantity: (num:number) => void}) {
  return (
    <>
    <button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
    {quantity}
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </>
  );
}
