import { useNavigate } from "react-router-dom";
import { POKEBALL_IMG_URL } from "../Shared/constants";

const PoketmonCard = ({ id, korean_name, img_url, onClick, buttonText }) => {
  const nav = useNavigate();
  return (
    <li
      className="pokemonCard_wrapper"
      onClick={() => nav(`/pokemon-detail?id=${id}`)}
    >
      <p>{korean_name}</p>
      <img src={img_url} alt={`${korean_name} 이미지`} />
      {img_url === POKEBALL_IMG_URL ? null : <p>NO.0{id}</p>}
      {buttonText && img_url !== POKEBALL_IMG_URL && (
        <button onClick={onClick}>{buttonText}</button>
      )}
    </li>
  );
};

export default PoketmonCard;
