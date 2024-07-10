import "./goods.scss";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goodsSlice";


export const Goods = () => {

  const dispatch = useDispatch();
  // const { items: goods } = useSelector(state => state.goods);
  const goods = useSelector(state => state.goods.items);
  console.log('goods: ', goods);
  const goodsStatus = useSelector(state => state.goods.status);
  console.log('goodsStatus: ', goodsStatus);

  const [label] = useState('Цветы');


  useEffect(() => {
    if (goodsStatus === 'idle') {
      dispatch(fetchGoods()); // загружаем товары
    }

  })

  return (
    <>
      <section className="goods">
        <div className="container goods__container">
          <div className="goods__box">
            <h2 className="goods__title">{label}</h2>

            <ul className="goods__list">
              {goods.map((item) => (
                <li className="goods__item" key={"0x00" + item.id}>
                  <Card className={"goods__card"} {...item} />
                </li>
              ))}
            </ul>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};
