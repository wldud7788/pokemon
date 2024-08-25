import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Shared/context";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const PoketmonCard = () => {
  const { selectedPoke, setPokeData, mockData, addCard } = useContext(Context);

  useEffect(() => {
    setPokeData(mockData);
  }, []);

  console.log(selectedPoke);

  const nav = useNavigate();
  return (
    <ul>
      {mockData.map((item, i) => {
        return (
          <li key={i} onClick={() => nav(`/pokemon-detail?id=${item.id}`)}>
            <p>{item.korean_name}</p>
            <img src={item.img_url} alt="" />

            <p>NO.0{item.id}</p>
            <button
              onClick={(event) => {
                // 이벤트 전파 방지
                event.stopPropagation();
                addCard(i);
              }}
            >
              추가
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PoketmonCard;
