import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/detail";
import { Context } from "./context";
import MOCK_DATA from "../mock";
import { useState } from "react";

const Router = () => {
  const [pokeData, setPokeData] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState([]);
  const mockData = MOCK_DATA;

  // DashBoard.jsx 부분의 포켓볼 이미지 상태
  const [ball, setBall] = useState([
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
    { img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" },
  ]);

  // DashBoard.jsx부분의 삭제 기능
  const delCard = (id) => {
    // 해당하는 인덱스와 같지 않은것들을 새로 저장
    confirm("삭제하시겠습니까?");
    const deletedItem = selectedPoke.filter((item) => id !== item.id);
    setSelectedPoke(deletedItem);
  };

  // PoketmonCard.jsx 부분의 카드 대시보드에 추가 부분
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

  return (
    <Context.Provider
      value={{
        pokeData,
        setPokeData,
        selectedPoke,
        setSelectedPoke,
        mockData,
        ball,
        setBall,
        delCard,
        addCard,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default Router;
