// подключаем дополнительную библиотеку для удобства classNames
import classNames from "classnames";

// принимаем пропсы с деструктуризацией
export const Card = ({ title, img, dateDelivery, price, id, className }) => {

  return (
    <article className={classNames(className, "card")} title={title}>
      <img className="card__image" src={img} alt={title} />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button className="card__button">{price}&nbsp;₽</button>
        </div>
      </div>
    </article>
  );
}


/*
export const Card = ({ data, className }) => {
  const {title, img, dateDelivery, price, id} = data;
  console.log('className: ', className);


  return (
    <article className={className ? className + " card" : "card"} title={title}>
      <img className="card__image" src={img}
        alt={title}
      />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button className="card__button">{price}&nbsp;₽</button>
        </div>
      </div>
    </article>
  );
}
*/