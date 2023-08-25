import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBeerProps = {
  searchBeer: string;
  label: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ searchBeer, label, handleInput }: SearchBeerProps) => {

  return (
    <>
      <div className="searchbar">
        <label htmlFor={label} className="searchbar__heading">
          Search Beers: 
        </label>
        <br />
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
