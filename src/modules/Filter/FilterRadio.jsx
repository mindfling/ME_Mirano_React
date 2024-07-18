// filter radio menu buttons
// типы товаров в FilterRadio

export const FilterRadio = ({
  handleTypeChange, data, type, isChecked
}) => {
  
  return (
    <>
      <input
        className="filter__radio"
        type="radio"
        name="type"
        value={data.value}
        id={data.id}
        checked={isChecked}
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
