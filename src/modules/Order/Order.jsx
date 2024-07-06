import classNames from "classnames";
import order from "./Order.module.scss";

// Order с условием
export const Order = () => {
  const isOrdered = 1;
  const isOpen = true;

  if (!isOpen) return null;

  const orderAmount = 2100;
  const orderHashNumber = "971f365a-caa1-4cdb-9446-bad2eff047e1";

  return (
    <>
      <div className={order.order}>
        <div className={order.wrapper}>
          {isOrdered ? (
            <>
              <h2 className={order.title}>Заказ оформлен!</h2>
              <p className={order.id}>Ваш номер заказа: {orderHashNumber}</p>
            </>
          ) : (
            <>
              <h2 className={order.title}>Оформить заказ</h2>
              <form className={order.form} id="order">
                <fieldset className={order.fieldset}>
                  <legend className={order.legend}>Данные заказчика</legend>
                  <div className={order["input-group"]}>
                    <input
                      className={order.input}
                      type="text"
                      name="name-buyer"
                      placeholder="Имя"
                    />
                    <input
                      className={order.input}
                      type="text"
                      name="phone-buyer"
                      placeholder="Телефон"
                    />
                  </div>
                </fieldset>
                <fieldset className={order.fieldset}>
                  <legend className={order.legend}>Данные получателя</legend>
                  <div className={order["input-group"]}>
                    <input
                      className={order.input}
                      type="text"
                      name="name-recipient"
                      placeholder="Имя"
                    />
                    <input
                      className={order.input}
                      type="text"
                      name="phone-recipient"
                      placeholder="Телефон"
                    />
                  </div>
                </fieldset>
                <fieldset className={order.fieldset}>
                  <legend className={order.legend}>Адрес</legend>
                  <div className={order["input-group"]}>
                    <input
                      className={order.input}
                      type="text"
                      name="street"
                      placeholder="Улица"
                    />
                    <input
                      className={classNames(order.input, order.input_min)}
                      type="text"
                      name="house"
                      placeholder="Дом"
                    />
                    <input
                      className={classNames(order.input, order.input_min)}
                      type="text"
                      name="apartment"
                      placeholder="Квартира"
                    />
                  </div>
                </fieldset>
                <fieldset className={order.fieldset}>
                  <div className={order.payment}>
                    <label className={order.labelRadio}>
                      <input
                        className={order.radio}
                        type="radio"
                        name="payment-online"
                        value="true"
                        defaultChecked="true"
                      />
                      Оплата онлайн
                    </label>
                  </div>
                  <div className={order.delivery}>
                    <label htmlFor="delivery">Доставка 01.07</label>
                    <input type="hidden" name="delivery-date" value="01.07" />
                    <div className={order.selectWrapper}>
                      <select
                        className={order.select}
                        name="delivery-time"
                        id="delivery"
                      >
                        <option value="9-12">с 9:00 до 12:00</option>
                        <option value="12-15">с 12:00 до 15:00</option>
                        <option value="15-18">с 15:00 до 18:00</option>
                        <option value="18-21">с 18:00 до 21:00</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className={order.footer}>
                <p className={order.total}>{orderAmount}&nbsp;₽</p>
                <button className={order.button} type="submit" form="order">
                  Заказать
                </button>
              </div>
            </>
          )}
        </div>
        <button className={order.close} type="button">
          ×
        </button>
      </div>
    </>
  );
};
