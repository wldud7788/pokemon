import { useContext } from "react";
import PoketmonCard from "./PoketmonCard";
import { PokeDataContext } from "../Shared/Context";
const PokemonList = () => {
  const { pokeData, onAdd } = useContext(PokeDataContext);

  return (
    <>
      <div className="pokeList">
        <ul>
          {pokeData.map((pokemon) => {
            return (
              <PoketmonCard
                key={pokemon.id}
                buttonText={"추가"}
                {...pokemon}
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(pokemon);
                }}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PokemonList;
