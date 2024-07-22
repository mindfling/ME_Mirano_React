import classNames from 'classnames';
import filter from './Filter.module.scss';
// filter radio menu buttons
// типы товаров в FilterRadio

export const FilterRadio = ({
  handleTypeChange,
  data,
  isChecked,
}) => {
  
  return (
    <div>
      <input
        className={filter.radio}
        type="radio"
        name="type"
        value={data.value}
        id={data.id}
        checked={isChecked}
        onChange={(e) => {
          handleTypeChange(e);
        }}
      />
      <label
        className={classNames(filter.label, filter[`label_${data.id}`])}
        htmlFor={data.id}
      >
        {data.title}
      </label>
    </div>
  )
};
