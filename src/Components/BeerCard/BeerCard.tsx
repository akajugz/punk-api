import "./BeerCard.scss";

type BeerCardProps = {
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
}: BeerCardProps) => {
  return (
    <>
      <div className="beer-card">
        <img className="beer-card__image" src={image} alt={name} />
        <div className="beer-card__content">
          <p className="beer-card__content--name">{name}</p>
          <p className="beer-card__content--tag-line">{tagline}</p>
          <p className="beer-card__content--first-brewed">{first_brewed}</p>
        </div>
      </div>
    </>
  );
};
