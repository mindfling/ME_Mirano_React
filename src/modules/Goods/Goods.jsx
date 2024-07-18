import "./goods.scss";
import { Card } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGoods } from "../../redux/goodsSlice";

export const Goods = () => {
  const {
    items: goods,
    status: goodsStatus,
    error,
  } = useSelector((state) => state.goods);

  const { siteTitle } = useSelector((state) => state.filter);


  let content = null;

  if (goodsStatus === "loading") {
    content = <h3 className="goods__list">Загружаем товары . . .</h3>;
  }

  if (goodsStatus === "success") {
    const dateDelivery = "сегодня до 14:00";
    const note = "Mirano Flowers Shop";
    content = (
      <>
        <ul className="goods__list">
          {goods.map((item) => (
            <li className="goods__item" key={item.id}>
              <Card
                className={"goods__card"}
                dateDelivery={dateDelivery}
                note={note}
                {...item}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (goodsStatus === "failed") {
    content = (
      <>
        <h3>Ошибка загрузки товаров :(</h3>
        <p>{error}</p>
      </>
    );
  }

  if (!goods || goods.length === 0) {
    content = <p>Нет товаров для отображения</p>;
  }

  return (
    <>
      <section className="goods">
        <div className="container goods__container">
          <div className="goods__box">
            <h2 className="goods__title">{siteTitle}</h2>
            {!goods.length ? <>{content}</> : <>{content}</>}
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};
