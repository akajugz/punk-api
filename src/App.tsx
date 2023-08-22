import { useState, useEffect } from "react";
import { BeerContainer } from "./Components/BeerContainer/BeerContainer";
import { Beer } from "./Components/Types/Types";
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
  },[]);

  return (
    <>
      <h1>Beers on us!</h1>
      <BeerContainer beers={beer} />
    </>
  );
}

export default App;
