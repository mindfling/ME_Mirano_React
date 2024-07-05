import cart from './CartItem.module.scss';

export const CartItem = ({ img, title, price }) => {
  return (
    <li className={cart.item}>
      <img className={cart.img} src={img} alt={title} />
      <h4 className={cart.itemTitle}>{title}</h4>
      <div className={cart.counter}>
        <button className={cart.counterBtn}>-</button>
        <input
          className={cart.counterInput}
          type="number"
          max="99"
          min="0"
          value="1"
        />
        <button className={cart.counterBtn}>+</button>
      </div>
      <p className={cart.price}>{price}&nbsp;₽</p>
    </li>
  );
};
