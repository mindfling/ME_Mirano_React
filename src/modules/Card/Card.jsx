import { useDispatch } from "react-redux";
import "./card.scss";
import classNames from "classnames";
import { addItemToCart } from "../../redux/cartSlice";
import { API_LOCAL } from "../../const";
import { useState } from "react";
import { formatNumber } from "../../util";

// деструктуризируем обьект ...item
export const Card = ({ className, id, photoUrl: img, name: title, price, dateDelivery, note }) => {
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState(`${formatNumber(price)}`);
  // setButtonText(`${price}\u00a0₽`);
  // setButtonText(() => "{price}&nbsp;₽");


  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, price, dateDelivery, note }));
  };

  return (
    <article
      className={classNames(className, "card")}
      title={`Товар ${title}, артикул 00${id}`}
    >
      <img
        className="card__image"
        src={`${API_LOCAL}${img}`}
        alt={`Товар ${title}, артикул ${id}`}
      />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button
            className="card__button"
            onClick={handlerAddToCart}
            onMouseEnter={() => setButtonText(`В\u00a0корзину`)}
            onMouseLeave={() => setButtonText(`${formatNumber(price)}`)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};
