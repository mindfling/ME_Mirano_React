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

<Goods />


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
</main>


<Footer />

{/* 
<footer className="footer">
  <div className="container footer__container">
    <img className="footer__logo" src="img/logo.svg" alt="Логотип Mirano Flower Boutique" />

    <address className="footer__address">
      <a className="footer__mail" href="mailto:Mirano@gmail.com">Mirano@gmail.com</a>

      <ul className="footer__social-list">
        <li className="footer__social-item">
          <a className="footer__link" href="#" aria-label="канал в телеграм">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 2.625C7.721 2.625 2.625 7.721 2.625 14C2.625 20.279 7.721 25.375 14 25.375C20.279 25.375 25.375 20.279 25.375 14C25.375 7.721 20.279 2.625 14 2.625ZM19.278 10.36C19.1074 12.1573 18.368 16.5253 17.9926 18.5386C17.8334 19.3918 17.5149 19.6761 17.2191 19.7103C16.5594 19.7671 16.0589 19.278 15.4219 18.8571C14.4209 18.1974 13.8521 17.7879 12.8853 17.1509C11.7591 16.4115 12.4871 16.002 13.1355 15.3423C13.3061 15.1716 16.2181 12.5212 16.275 12.2824C16.2829 12.2462 16.2818 12.2086 16.2719 12.173C16.262 12.1373 16.2436 12.1045 16.2181 12.0776C16.1499 12.0208 16.0589 12.0435 15.9792 12.0549C15.8769 12.0776 14.2844 13.1355 11.179 15.2285C10.724 15.5356 10.3145 15.6949 9.9505 15.6835C9.541 15.6721 8.7675 15.456 8.18738 15.2626C7.47075 15.0351 6.91337 14.91 6.95888 14.5119C6.98163 14.3071 7.266 14.1024 7.80063 13.8863C11.1221 12.4416 13.3289 11.4861 14.4323 11.0311C17.5945 9.71163 18.2429 9.48413 18.6751 9.48413C18.7661 9.48413 18.9823 9.50688 19.1188 9.62063C19.2325 9.71163 19.2666 9.83675 19.278 9.92775C19.2666 9.996 19.2894 10.2008 19.278 10.36Z"
                fill="#D17D2F" />
            </svg>
          </a>
        </li>

        <li className="footer__social-item">
          <a className="footer__link" href="#" aria-label="канал в youtube">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.6667 17.4999L17.7217 13.9999L11.6667 10.4999V17.4999ZM25.1534 8.36492C25.305 8.91325 25.41 9.64825 25.48 10.5816C25.5617 11.5149 25.5967 12.3199 25.5967 13.0199L25.6667 13.9999C25.6667 16.5549 25.48 18.4333 25.1534 19.6349C24.8617 20.6849 24.185 21.3616 23.135 21.6533C22.5867 21.8049 21.5834 21.9099 20.0434 21.9799C18.5267 22.0616 17.1384 22.0966 15.855 22.0966L14 22.1666C9.11171 22.1666 6.06671 21.9799 4.86504 21.6533C3.81504 21.3616 3.13837 20.6849 2.84671 19.6349C2.69504 19.0866 2.59004 18.3516 2.52004 17.4183C2.43837 16.4849 2.40337 15.6799 2.40337 14.9799L2.33337 13.9999C2.33337 11.4449 2.52004 9.56659 2.84671 8.36492C3.13837 7.31492 3.81504 6.63825 4.86504 6.34659C5.41337 6.19492 6.41671 6.08992 7.95671 6.01992C9.47337 5.93825 10.8617 5.90325 12.145 5.90325L14 5.83325C18.8884 5.83325 21.9334 6.01992 23.135 6.34659C24.185 6.63825 24.8617 7.31492 25.1534 8.36492Z"
                fill="#D17D2F" />
            </svg>
          </a>
        </li>

        <li className="footer__social-item">
          <a className="footer__link" href="#" aria-label="группа в вк">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 2.625C7.71768 2.625 2.625 7.71768 2.625 14C2.625 20.2823 7.71768 25.375 14 25.375C20.2823 25.375 25.375 20.2823 25.375 14C25.375 7.71768 20.2823 2.625 14 2.625ZM18.3746 15.4586C18.3746 15.4586 19.3806 16.4515 19.6283 16.9125C19.6354 16.922 19.6389 16.9314 19.6413 16.9362C19.742 17.1056 19.7657 17.2371 19.7159 17.3355C19.633 17.499 19.3486 17.5796 19.2515 17.5867H17.4741C17.3509 17.5867 17.0926 17.5547 16.7798 17.339C16.5392 17.1708 16.3023 16.8947 16.0712 16.6257C15.7264 16.2252 15.4278 15.8792 15.1268 15.8792C15.0886 15.8792 15.0506 15.8852 15.0143 15.897C14.7868 15.9705 14.4953 16.2951 14.4953 17.1601C14.4953 17.4303 14.282 17.5855 14.1315 17.5855H13.3175C13.0402 17.5855 11.5958 17.4883 10.3162 16.1387C8.74973 14.4858 7.3397 11.1705 7.32785 11.1397C7.23898 10.9252 7.42264 10.8103 7.62289 10.8103H9.41801C9.65736 10.8103 9.73556 10.956 9.79006 11.0852C9.85405 11.2356 10.0887 11.834 10.4737 12.507C11.0982 13.6042 11.4809 14.0498 11.7878 14.0498C11.8453 14.0491 11.9019 14.0344 11.9525 14.0071C12.353 13.7843 12.2783 12.3565 12.2606 12.0603C12.2606 12.0046 12.2594 11.4217 12.0544 11.142C11.9075 10.9394 11.6575 10.8624 11.5058 10.834C11.5672 10.7493 11.6481 10.6806 11.7416 10.6337C12.0165 10.4963 12.5118 10.4761 13.0035 10.4761H13.2772C13.8104 10.4832 13.9479 10.5176 14.141 10.5662C14.532 10.6598 14.5403 10.9122 14.5059 11.776C14.4953 12.0212 14.4846 12.2985 14.4846 12.6255C14.4846 12.6966 14.4811 12.7724 14.4811 12.853C14.4692 13.2926 14.455 13.7915 14.7654 13.9964C14.8059 14.0218 14.8527 14.0354 14.9005 14.0355C15.0083 14.0355 15.333 14.0355 16.2122 12.5272C16.4833 12.0417 16.719 11.5372 16.9172 11.0176C16.935 10.9868 16.9871 10.892 17.0487 10.8553C17.0942 10.8321 17.1446 10.8203 17.1957 10.8209H19.306C19.5358 10.8209 19.6934 10.8553 19.723 10.9442C19.7752 11.0852 19.7136 11.5153 18.7502 12.8198L18.3201 13.3874C17.4469 14.532 17.4469 14.5901 18.3746 15.4586Z"
                fill="#D17D2F" />
            </svg>
          </a>
        </li>
      </ul>
    </address>

    <div className="footer__developers">
      <p className="footer__developers-title">Проект сделан в учебных целях</p>

      <ul className="footer__developers-list">
        <li className="footer__developers-item">
          Designer: <a className="footer__link" href="Anastasia_Ilina">Anastasia
            Ilina</a>
        </li>
        <li className="footer__developers-item">
          Developer: <a className="footer__link" href="maksim_leskin">Makism
            Leskin</a>
        </li>
      </ul>
    </div>

    <p className="footer__copyright">©MIRANO, 2024</p>
  </div>
</footer>
 */}


      <Order />
    </>
  )
}

export default App
