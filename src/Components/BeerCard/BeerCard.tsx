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
        <div className="beer">
          <p className="beer__name">{name}</p>
          <p className="beer__tag-line">{tagline}</p>
          <p className="beer__first-brewed">{first_brewed}</p>
        </div>
      </div>
    </>
  );
};
