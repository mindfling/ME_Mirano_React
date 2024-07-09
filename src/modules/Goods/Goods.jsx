import "./goods.scss";
import { goodsArray } from "../../goodsArray";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import { useState } from "react";
// import { useSelector } from "react-redux";

export const Goods = () => {
  // const goodsLista = useSelector(state => state.cart.items);
  const [goodsList] = useState(goodsArray);  // пока что берем товары из верменного файла

  const [label] = useState('Цветы');


  return (
    <>
      <section className="goods">
        <div className="container goods__container">
          <div className="goods__box">
            <h2 className="goods__title">{label}</h2>

            <ul className="goods__list">
              {goodsList.map((item) => (
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
