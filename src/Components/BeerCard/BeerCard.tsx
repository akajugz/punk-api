import { Link } from "react-router-dom";
import "./BeerCard.scss";

type BeerCardProps = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  image: string;
};

export const BeerCard = ({
  name,
  tagline,
  first_brewed,
  image,
  id,
}: BeerCardProps) => {
  return (
    <>
      <div className="beer-card">
        <img className="beer-card__image" src={image} alt={name} />
        <div className="beer-card__content">
          <Link to={`/MoreInfoOnBeer/${id}`}>
            <p className="beer-card__content--name">{name}</p>
          </Link>
          <p className="beer-card__content--tag-line">{tagline}</p>
          <p className="beer-card__content--first-brewed">{first_brewed}</p>
        </div>
      </div>
    </>
  );
};
