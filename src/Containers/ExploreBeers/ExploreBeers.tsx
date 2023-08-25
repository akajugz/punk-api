import { useState, FormEvent, ChangeEvent } from "react";
import { Beer } from "../../Components/Types/Types";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BeerContainer } from "../../Components/BeerContainer/BeerContainer";
import { FilterMenu } from "../../Components/FilterMenu/FilterMenu";
import "./ExploreBeers.scss"

type ExploreBeerProps = {
  beers: Beer[];
};

const ExploreBeers = ({ beers }: ExploreBeerProps) => {
  const [searchBeer, setSearchBeer] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchBeer(input);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    setSelectedFilter(selectedOption);
  };

  const filteredBeers = beers
    .filter((beer) => beer.name.toLowerCase().includes(searchBeer))
    .filter((beer) => {
      if (selectedFilter === "High ABV") {
        return beer.abv >= 6.0;
      }
      if (selectedFilter === "Acidity Less Than 4ph") {
        return beer.ph < 4;
      }
      if (selectedFilter === "IBU 41+") {
        return beer.ibu >= 41;
      }
      if (selectedFilter === "IBU 40-") {
        return beer.ibu <= 40;
      }
      return true;
    });

  const isBeerListed = filteredBeers.length > 0;

  return (
    <>
      <p className="explore-tagline">At your disposal, you have the search bar and the filter section to search the perfect beer for you!</p>
      <SearchBar
        searchBeer={searchBeer}
        label="Search for your beer!"
        handleInput={handleInput}
      />

      <FilterMenu
        onChange={handleFilterChange}
        selected={selectedFilter}
        options={[
          "All",
          "High ABV",
          "Acidity Less Than 4ph",
          "IBU 41+",
          "IBU 40-",
        ]}
        label="Filter by:"
      />

      {isBeerListed ? (
        <BeerContainer beers={filteredBeers} />
      ) : (
        <p>
          Sorry, I couldn't find this one for you. Would you like to try a
          different one?
        </p>
      )}
    </>
  );
};

export default ExploreBeers;
