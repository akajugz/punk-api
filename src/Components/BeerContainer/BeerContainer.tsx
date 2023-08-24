import { Beer } from "../Types/Types";
import { BeerCard } from "../BeerCard/BeerCard";
import "./BeerContainer.scss";

type BeerContainerProps = {
  beers: Beer[];
};

export const BeerContainer = ({ beers }: BeerContainerProps) => {
  return (
    <>
      <div className="beer-container">
        {beers.map((beer) => (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            first_brewed={beer.first_brewed}
            image={beer.image_url}
            id={beer.id}
          />
        ))}
      </div>
    </>
  );
};
