import { useParams } from "react-router-dom";
import "./MoreInfoOnBeer.scss";
import { Beer } from "../Types/Types";

type MoreInfoOnBeerProps = {
  beer: Beer[];
};


// NEED OLLIE'S HELP

// TRIED TO GET HOLD OF THE INFORMATION WITHOUT USING useParams FIRST - DIDN'T WORK
// TRIED TO DEFINE THE PROPS BY MYSELF RATHER THAN IMPORTING THEM - DIDN'T WORK
// TRIED TO USE THE .FIND FUNCTION WITH ID - DIDN'T WORK
// TRIED TO USE THE .FIND FUNCTION WITH NAME - DIDN'T WORK


export const MoreInfoOnBeer = ({ beer }: MoreInfoOnBeerProps) => {
  const { name } = useParams();
  const moreInfo = beer.find((beer) => beer.name === String(name));

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
            {moreInfo.tagline}
          </p>
          <p className="more-info-card__content--first-brewed">
            {moreInfo.first_brewed}
          </p>
          <p>{moreInfo.description}</p>
          <p>{moreInfo.food_pairing}</p>
          <p>{moreInfo.brewers_tips}</p>
          <p>{moreInfo.contributed_by}</p>
        </div>
      </div>
    </>
  );
};
