import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
    return (
        <>
            <div className="nav">
                <h1 className="nav__logo">BeerLand</h1>
                <Link to={"/"} className="nav__home-button">
                    Let go home
                </Link>
                <Link to={"/BeerContainer"} className="nav__explore">
                    Pub Crawl
                </Link>
            </div>
        </>
    )
}