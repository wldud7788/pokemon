import React, { useContext } from "react";
import PoketmonCard from "./PoketmonCard";
import { PokeDataContext } from "../Shared/Context";

const DashBoard = () => {
  const { selectedPoke, onDelete } = useContext(PokeDataContext);

  return (
    <div className="dashboard">
      <h2>나만의 포켓몬</h2>
      <ul>
        {selectedPoke.map((item) => {
          return (
            <PoketmonCard
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
              buttonText={item.id ? "삭제" : null}
              {...item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DashBoard;
