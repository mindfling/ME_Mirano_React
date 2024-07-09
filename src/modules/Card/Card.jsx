import { useDispatch } from "react-redux";
import "./card.scss";
import classNames from "classnames";
import { addItemToCart } from "../../redux/cartSlice";

export const Card = ({ className, title, img, dateDelivery, price, id }) => {
  const dispatch = useDispatch();

  const note = 'Mirano Flowers Shop';

  const handlerAddToCart = () => {
    dispatch(addItemToCart({id, note, img, title, dateDelivery, price}));
  };

  return (
    <article className={classNames(className, "card")} title={title}>
      <img className="card__image" src={img} alt={title} />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button className="card__button" onClick={handlerAddToCart}>
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  );
};
