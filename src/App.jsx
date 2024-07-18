import { useEffect, useState } from "react";
import { Filter } from "./modules/Filter/Filter";
import { Footer } from "./modules/Footer/Footer";
import { Goods } from "./modules/Goods/Goods";
import { Header } from "./modules/Header/Header";
import { Hero } from "./modules/Hero/Hero";
import { Order } from "./modules/Order/Order";
import { Subscribe } from "./modules/Subscribe/Subscribe";
import { useDispatch } from "react-redux";
import { registerCart } from "./redux/cartSlice";

const scrollToFilter = () => {
  console.log("scrollToFilter in Header");
};

function App() {
  const dispatch = useDispatch();
  const [titleGoods, setTitleGoods] = useState(""); // изменяем заголовок при нажатии на FilterRadio

  // at once call registerCart
  useEffect(() => {
    const initCart = async () => {
      console.log("initCart: ");
      await dispatch(registerCart());
    };
    initCart();
  });

  return (
    <>
      <Header scrollToFilter={scrollToFilter} />

      <main>
        <Hero />
        <Filter setTitleGoods={setTitleGoods} />
        <Goods title={titleGoods} />
        <Subscribe />
      </main>

      <Footer />

      <Order />
    </>
  );
}

export default App;
