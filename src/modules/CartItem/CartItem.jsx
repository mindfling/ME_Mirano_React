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
    <li className="cart__item">
      <img className="cart__img" src={data.img} alt={data.title} />
      <h4 className="cart__item-title">{data.title}</h4>
      <div className="cart__counter">
        <button className="cart__counter-btn">-</button>
        <input
          className="cart__counter-input"
          type="number"
          max="99"
          min="0"
          value="1"
        />
        <button className="cart__counter-btn">+</button>
      </div>
      <p className="cart__price">{data.price}&nbsp;₽</p>
    </li>
  );
};
