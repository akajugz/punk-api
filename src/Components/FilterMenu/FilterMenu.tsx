import { ChangeEventHandler } from "react";
import "./FilterMenu.scss";

type FilterMenuProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  selected: string;
  options: string[];
  label: string;
};

export const FilterMenu = ({
  onChange,
  selected,
  options,
  label,
}: FilterMenuProps) => {
  return (
    <div className="filter">
      <label className="filter__name">{label}</label>
      {options.map((filterOptions) => (
        <div className="filter__options" key={filterOptions}>
          <input
            className="filter__options--buttons"
            type="radio"
            id={filterOptions}
            name="filter"
            value={filterOptions}
            checked={selected === filterOptions}
            onChange={onChange}
          />
          <label htmlFor={filterOptions}>{filterOptions}</label>
        </div>
      ))}
    </div>
  );
};
