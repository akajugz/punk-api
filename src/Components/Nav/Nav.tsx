import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
    return (
        <>
            <div className="nav">
                <Link to={"/"} className="nav__logo">
                    BeerLand
                </Link>
                <Link to={"/BeerContainer"} className="nav__explore">
                    Beer Crawl
                </Link>
            </div>
        </>
    )
}