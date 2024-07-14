import { useDispatch } from 'react-redux';
import cart from './CartItem.module.scss';
import { useState } from 'react';
import { addItemToCart } from '../../redux/cartSlice';
import { debounce, formatNumber } from '../../util';
import { API_LOCAL } from '../../const';

export const CartItem = ({ id, img, title, price, quantity = 1 }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(quantity);

/*
  const debounceInputChange = debounce((newQuantity) => {});

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setInputQuantity(newQuantity);
    dispatch(addItemToCart({ productId: id, quantity, newQuantity }))
  }

  const handleDecrement = () => {
    const newQuantity = inputQuantity + 1;
    setInputQuantity(newQuantity);
    dispatch(addItemToCart({ productId: id, quantity, newQuantity }))
  }

  const handleIncrement = () => {
    const newQuantity = inputQuantity + 1;
    setInputQuantity(newQuantity);
    dispatch(addItemToCart({ productId: id, quantity, newQuantity }))
  }
*/


  return (
    <li className={cart.item} title={title}>
      <img className={cart.img} src={`${API_LOCAL}${img}`} alt={title} />
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
      <p className={cart.price}>{formatNumber(price)}</p>
    </li>
  );
};
