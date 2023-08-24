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
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="filter"
            value={option}
            checked={selected === option}
            onChange={onChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};
