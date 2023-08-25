import { useParams } from "react-router-dom";
import "./MoreInfoOnBeer.scss";
import { Beer } from "../Types/Types";

type MoreInfoOnBeerProps = {
  beer: Beer[];
};

export const MoreInfoOnBeer = ({ beer }: MoreInfoOnBeerProps) => {
  const { beerId } = useParams();
  const moreInfo = beer.find((beer) => beer.id === Number(beerId));

  if (moreInfo === undefined) {
    return <p>Beer not found</p>;
  }

  return (
    <>
      <div className="more-info-card">
        <p className="more-info-card__name">{moreInfo.name}</p>
        <div className="more-info-card__image">
          <img
            className="more-info-card__image--photo"
            src={moreInfo.image_url}
            alt={moreInfo.name}
          />
        </div>
        <div className="more-info-card__content">
          <p className="more-info-card__content--tag-line">
            <strong>Tag line -</strong> {moreInfo.tagline}
          </p>
          <p className="more-info-card__content">
          <strong>First brewed -</strong> {moreInfo.first_brewed}
          </p>
          <p className="more-info-card__content"> <strong>Description -</strong>{moreInfo.description}</p>
          <p className="more-info-card__content"> <strong>Best food pairings -</strong>{moreInfo.food_pairing}</p>
          <p className="more-info-card__content"><strong>Brewing tips -</strong>{moreInfo.brewers_tips}</p>
          <p className="more-info-card__content"> <strong>Contributed by -</strong>{moreInfo.contributed_by}</p>
        </div>
      </div>
    </>
  );
};
