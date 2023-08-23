import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BeerContainer } from "./Components/BeerContainer/BeerContainer";
import { Beer } from "./Components/Types/Types";
import ExploreBeers from "./Containers/ExploreBeers/ExploreBeers";
import { Nav } from "./Components/Nav/Nav";
import "./App.scss";

function App() {
  const [beer, setBeer] = useState<Beer[]>([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
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
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
