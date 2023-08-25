import { Link } from "react-router-dom";
import BeerLand from "../../assets/images/BeerLand.png";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <div className="home">
        <h1 className="home__heading">Welcome to BeerLand</h1>
        <br />
        <p className="home__tagline">
          A place where you'll find everything there is to know about beer!
        </p>
        <br />
        <img
          src={BeerLand}
          alt="A place where beer was invented"
          className="home__photo"
        />
        <br />
        <p className="home__instructions">
          Click on{" "}
          <Link to={"/BeerContainer"} className="pub-crawl-button">
            Beer Crawl
          </Link>{" "}
          to know everything there is to know about beers!
        </p>
      </div>
    </>
  );
};
