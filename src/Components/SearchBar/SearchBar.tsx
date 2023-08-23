import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBeerProps = {
  searchBeer: string;
  label: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ searchBeer, label, handleInput }: SearchBeerProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <>
      <div className="searchbar">
        <label htmlFor={label} className="searchbar__heading">
          {capitalizedLabel}
        </label>
        <input
          className="searchbar__text-field"
          type="text"
          name={label}
          placeholder="Search your fav..."
          value={searchBeer}
          onInput={handleInput}
        />
      </div>
    </>
  );
};

export default SearchBar;
