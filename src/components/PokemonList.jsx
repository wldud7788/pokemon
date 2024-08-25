import PoketmonCard from "./PoketmonCard";

const PokemonList = ({
  pokeData,
  setPokeData,
  selectedPoke,
  setSelectedPoke,
  mockData,
}) => {
  return (
    <>
      <div className="pokeList">
        <PoketmonCard
          pokeData={pokeData}
          setPokeData={setPokeData}
          selectedPoke={selectedPoke}
          setSelectedPoke={setSelectedPoke}
          mockData={mockData}
        />
      </div>
    </>
  );
};

export default PokemonList;
