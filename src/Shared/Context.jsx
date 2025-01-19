import { createContext, useState } from "react";
import MOCK_DATA from "../mock";
import { v4 as uuidv4 } from "uuid";
import { POKEBALL_IMG_URL } from "./constants";

export const PokeDataContext = createContext(null);

// 대시보드의 초기 값(포켓볼 이미지 6개)
const initialSelectedPokes = Array(6)
  .fill()
  .map((item) => ({ id: uuidv4(), img_url: POKEBALL_IMG_URL }));

export const PokeDataProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState(MOCK_DATA);
  const [selectedPoke, setSelectedPoke] = useState(initialSelectedPokes);
  // 추가
  const onAdd = (pokemon) => {
    const emptyIndex = selectedPoke.findIndex(
      (item) => item.img_url === POKEBALL_IMG_URL
    );
    const isDuplicate = selectedPoke.some((item) => item.id === pokemon.id);
    if (isDuplicate) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (emptyIndex == -1) {
      alert("6개 이상 추가할 수 없습니다.");
      return;
    } else {
      const addConfirm = confirm("추가하시겠습니까?");
      if (addConfirm) {
        const newSelectedPoke = [...selectedPoke];
        newSelectedPoke[emptyIndex] = pokemon;
        setSelectedPoke(newSelectedPoke);
      }
    }
  };

  const onDelete = (id) => {
    const confrimDelete = confirm("정말 삭제하시겠습니까?");
    if (confrimDelete) {
      const deletedPoke = selectedPoke.map((item) => {
        if (item.id === id) {
          return { img_url: POKEBALL_IMG_URL };
        }
        return item;
      });
      setSelectedPoke(deletedPoke);
    }
  };

  const value = {
    pokeData,
    selectedPoke,
    onAdd,
    onDelete,
  };
  return (
    <PokeDataContext.Provider value={value}>
      {children}
    </PokeDataContext.Provider>
  );
};
