// filter radio menu buttons
// типы товаров в FilterRadio
// const filterTypes = [
//   {
//     name: "type",
//     value: "bouquets",
//     id: "flower",
//     text: "Цветы",
//   },
//   {
//     name: "type",
//     value: "toys",
//     id: "toys",
//     text: "Игрушки",
//   },
//   {
//     name: "type",
//     value: "postcards",
//     id: "postcard",
//     text: "Открытки",
//   },
// ];



export const FilterRadio = ({
  handleTypeChange, data, type,
}) => {
  
  return (
    <>
      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={data.value}
        id={data.id}
        checked={data.value === type}
        onChange={handleTypeChange}
      />
      <label
        className={`filter__label filter__label_${data.id}`}
        htmlFor={data.id}
      >
        {data.title}
      </label>
    </>
  )
};


/*
<div className="radioitem" key={index}>

      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={item.value}
        id={item.id}
        checked={item.value === filters.type}
        onChange={handleTypeChange}
      />
      <label
        className={"filter__label filter__label_" + item.id}
        htmlFor={item.id}
      >
        {item.text}
      </label>
</div>
*/