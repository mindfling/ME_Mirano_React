import { useDispatch } from "react-redux";
import card from './Card.module.scss';
// import "./card.scss";
import classNames from "classnames";
import { addItemToCart } from "../../redux/cartSlice";
import { API_URL} from "../../const";
import { useState } from "react";
import { formatNumber } from "../../util";

// деструктуризируем обьект ...item
export const Card = ({
  className,
  id,
  photoUrl: img,
  name: title,
  price,
  dateDelivery,
  note,
}) => {
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState(`${formatNumber(price)}`);
  // `\u00a0\u20bd`
  // `&nbsp;₽`


  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, price, dateDelivery, note }));
  };

  const handlerMouseEnter = () => {
    setButtonText(`В\u00a0корзину`);
  }

  const handlerMouseLeave = () => {
    setButtonText(`${formatNumber(price)}`);
  }


  return (
    <article
      className={classNames(className, card.card)}
      title={`Товар ${title}, артикул 00${id}`}
    >
      <img
        className={card.image}
        src={`${API_URL}${img}`}
        alt={`Товар ${title}, артикул ${id}`}
      />
      <div className={card.content}>
        <h3 className={card.title}>{title}</h3>
        <div className={card.footer}>
          <p className={card.date_delivery}>{dateDelivery}</p>
          <button
            className={card.button}
            onClick={handlerAddToCart}
            onMouseEnter={() => handlerMouseEnter()}
            onMouseLeave={() => handlerMouseLeave()}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};
