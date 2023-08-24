import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Beer } from "../../Components/Types/Types";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BeerContainer } from "../../Components/BeerContainer/BeerContainer";

type ExploreBeerProps = {
  beers: Beer[];
};

const ExploreBeers = ({ beers }: ExploreBeerProps) => {
  const [searchBeer, setSearchBeer] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchBeer(input);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchBeer)
  );

  const isBeerListed = filteredBeers.length > 0;

  return (
    <>
      <SearchBar
        searchBeer={searchBeer}
        label="Search for your beer!"
        handleInput={handleInput}
      />
      <Link to={"/MoreInfoOnBeer"}>
      {isBeerListed ? (
        <BeerContainer beers={filteredBeers} />
      ) : (
        <p>
          Sorry, we're out of stock on this one. Would you like to try a
          different one?
        </p>
      )}
      </Link>
    </>
  );
};

export default ExploreBeers;
