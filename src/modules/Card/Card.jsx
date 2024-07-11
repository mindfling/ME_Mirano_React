import { useDispatch } from "react-redux";
import "./card.scss";
import classNames from "classnames";
import { addItemToCart } from "../../redux/cartSlice";
import { API_LOCAL } from "../../const";

// деструктуризируем обьект ...item
export const Card = ({ className, id, photoUrl: img, name: title, price }) => {
  const dispatch = useDispatch();

  const dateDelivery = "сегодня до 14:00";
  const note = "Mirano Flowers Shop";

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, dateDelivery, price }));
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
          <button className="card__button" onClick={handlerAddToCart}>
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  );
};
