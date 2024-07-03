import "./goods.scss";

import { goodsArray } from "../../goodsArray";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";

export const Goods = () => {
  const goodsList = goodsArray;

  return (
    <>
      <section className="goods">
        <div className="container goods__container">
          <div className="goods__box">
            <h2 className="goods__title">Цветы</h2>

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
