import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState([]);
  const mockData = MOCK_DATA;
  return (
    <>
      <DashBoard
        selectedPoke={selectedPoke}
        setSelectedPoke={setSelectedPoke}
      />
      <PokemonList
        pokeData={pokeData}
        setPokeData={setPokeData}
        selectedPoke={selectedPoke}
        setSelectedPoke={setSelectedPoke}
        mockData={mockData}
      />
    </>
  );
};

export default Dex;
