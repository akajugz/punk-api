import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Beer } from "./Components/Types/Types";
import ExploreBeers from "./Containers/ExploreBeers/ExploreBeers";
import { Nav } from "./Components/Nav/Nav";
import "./App.scss";
import { HomePage } from "./Containers/HomePage/HomePage";

function App() {
  const [beer, setBeer] = useState<Beer[]>([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    const res = await fetch(url);
    const data = await res.json();
    setBeer(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <HashRouter>
      <>
        <Nav />
        <Routes>
          <Route
            path="/BeerContainer"
            element={<ExploreBeers beers={beer} />}
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
