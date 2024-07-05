import cart from './CartItem.module.scss';

/* data = item
{
  id: 2,
  img: "https://dull-rose-pawpaw.glitch.me/img/39.jpg",
  title: "Букет из роз Grand Avalanche (101 шт)",
  dateDelivery: "сегодня в 14:00",
  price: "14800",
},
*/

export const CartItem = ({ data }) => {
  return (
    <li className={cart.item}>
      <img className={cart.img} src={data.img} alt={data.title} />
      <h4 className={cart.itemTitle}>{data.title}</h4>
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
      <p className={cart.price}>{data.price}&nbsp;₽</p>
    </li>
  );
};
