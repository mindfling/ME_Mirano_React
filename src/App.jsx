import { Footer } from "./modules/Footer/Footer"
import { Goods } from "./modules/Goods/Goods"
import { Header } from "./modules/Header/Header"
import { Hero } from "./modules/Hero/Hero"
import { Order } from "./modules/Order/Order"

function App() {

  return (
    <>
      <Header />

      <main>
        <Hero />


{/*
<section className="filter">
  <h2 className="visually-hidden"></h2>
  <div className="container">
    <form className="filter__form">
      <fieldset className="filter__group">
        <input className="filter__radio" type="radio" name="type" value="bouquets" id="flower" defaultChecked />
        <label className="filter__label filter__label_flower" htmlFor="flower">Цветы</label>

        <input className="filter__radio" type="radio" name="type" value="toys" id="toys" />
        <label className="filter__label filter__label_toys" htmlFor="toys">Игрушки</label>

        <input className="filter__radio" type="radio" name="type" value="postcards" id="postcard" />
        <label className="filter__label filter__label_postcard" htmlFor="postcard">Открытки</label>
      </fieldset>

      <fieldset className="filter__group filter__group_choices">
        <div className="filter__choices choices">
          <button className="filter__select choices__btn" type="button">Цена</button>

          <div className="choices__box filter__choices-box">
            <fieldset className="filter__price">
              <input className="filter__input-price" type="text" name="minPrice" placeholder="от" />
              <input className="filter__input-price" type="text" name="maxPrice" placeholder="до" />
            </fieldset>
          </div>
        </div>

        <div className="filter__choices filter__choices_type choices">
          <button className="filter__select choices__btn" type="button">Тип
            товара</button>

          <div className="choices__box filter__choices-box filter__choices-box_type">
            <ul className="filter__type-list">
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Монобукеты</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Авторские
                  букеты</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Цветы в
                  коробке</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Цветы в
                  корзине</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Букеты из
                  сухоцветов</button>
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</section>
*/}




        <Goods />

{/* 
<section className="subscribe">
  <div className="container">
    <h2 className="subscribe__title">Подпишись на&nbsp;рассылку</h2>

    <form className="subscribe__form" action="#">
      <input className="subscribe__input" type="email" name="email" placeholder="E-mail" />

      <button className="subscribe__button" aria-label="подписаться на рассылку">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.166687 6.66667C0.78502 6.66667 1.70835 6.05583 2.48335 5.4375C3.48335 4.6425 4.35585 3.6925 5.02169 2.60333C5.52085 1.78667 6.00002 0.796667 6.00002 0M6.00002 0C6.00002 0.796667 6.47919 1.7875 6.97835 2.60333C7.64502 3.6925 8.51752 4.6425 9.51585 5.4375C10.2917 6.05583 11.2167 6.66667 11.8334 6.66667M6.00002 0V20"
            stroke="white" />
        </svg>
      </button>
    </form>
  </div>
</section>
*/}

      </main>

      <Footer />


      <Order />
    </>
  )
}

export default App
