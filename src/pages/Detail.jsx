import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { PokeDataContext } from "../Shared/Context";

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsId = queryParams.get("id");

  const { pokeData } = useContext(PokeDataContext);

  const currentPokemon = pokeData.find(
    (item) => String(item.id) === String(paramsId)
  );

  if (!currentPokemon) {
    return <p>포켓몬을 찾을 수 없습니다.</p>;
  }
  const { korean_name, img_url, types, description } = currentPokemon;

  return (
    <div className="detail_info">
      <div>
        <p>{korean_name}</p>
        <img src={img_url} alt="" />

        <p>타입: {types.join(",")}</p>
        <p>{description}</p>
        <Link to={"/dex"}>뒤로가기</Link>
        <p></p>
      </div>
    </div>
  );
};

export default Detail;
