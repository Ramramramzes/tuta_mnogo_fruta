import styles from './basketcanvas.module.scss';
import { useEffect, useState } from 'react';
import { Badge, Offcanvas, Spinner } from 'react-bootstrap';
import { IFinalBasket } from '../../interfaces/basket';
import { basketSVG } from '../../svg/catalogSvg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UseBasketList } from '../../hooks/useBasketList';
import { BasketItem } from '../BasketItem';

export function BasketCanvas() {
  const BasketState = useSelector((state: RootState) => state.basket);
  const [finalBasket, setFinalBasket] = useState<IFinalBasket[]>([]);
  const { item, loading } = UseBasketList();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const updatedBasket: IFinalBasket[] = [];

    BasketState.forEach((el) => {
      const found = item.find((i) => i.product.id === el.id);
      const needVariation = found?.variation.find((v) => v.name === el.size);

      if (found && needVariation) {
        const readyToPush: IFinalBasket = {
          id: found.product.id,
          name: found.product.name,
          price: needVariation.price,
          size: needVariation.name,
          quantity: el.quantity,
          img: found.product.images[0].src,
          category: found.product.categories[0].name,
          toLink: found.product,
        };

        updatedBasket.push(readyToPush);
      }
    });

    setFinalBasket(updatedBasket);
  }, [BasketState, item, loading]);

  return (
    <>
      <button className={styles.basketBtn} onClick={handleShow}>
        {basketSVG()}
        {BasketState.length > 0 && (
          <Badge className={styles.badge}>{BasketState.length}</Badge>
        )}
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={'end'}
        style={{ width: '40%' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.basketList}>
            {!loading ? (
              finalBasket.length > 0 ?
                finalBasket.map((el) => (
                  <BasketItem key={el.id} el={el} handleClose={handleClose} />
                ))
                :
                <p className={styles.empty}>Ваша корзина пуста :(</p>
              ) : (
                <div className={styles.spinerBlock}>
                  <Spinner animation="grow" variant="warning" />
                </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}