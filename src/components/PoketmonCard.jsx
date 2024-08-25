import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const PoketmonCard = ({
  pokeData,
  setPokeData,
  selectedPoke,
  setSelectedPoke,
  mockData,
}) => {
  useEffect(() => {
    setPokeData(mockData);
  }, []);

  const addCard = (i) => {
    //현재 선택한 포켓몬 카드 아이디
    const currentCard = pokeData[i].id;
    if (selectedPoke.some((item) => item.id == currentCard)) {
      alert("이미 등록된 카드입니다.");
    } else {
      setSelectedPoke((prev) => [...prev, pokeData[i]]);
      alert("추가 하시겠습니까?");
    }
  };
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
