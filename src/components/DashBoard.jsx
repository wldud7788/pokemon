import React from "react";
import { useEffect, useRef } from "react";

import { useContext } from "react";
import { Context } from "../Shared/context";

const DashBoard = () => {
  const { selectedPoke, ball, setBall, delCard } = useContext(Context);

  // 렌더링 간에 값을 유지할 수 있는 useRef사용
  // useRef를 사용하지 않으면 매 렌더링마다 현재 길이만 가져와서 비교 불가
  const prevSelectedPokeLength = useRef(selectedPoke.length);
  // 굳이 useEffect?? ***** SelectedPoke 값들을
  useEffect(() => {
    const currentSelectedPokeLength = selectedPoke.length;
    if (selectedPoke.length > 6) {
      alert("최대 6개까지 선택할 수 있습니다.");
    } else if (currentSelectedPokeLength > prevSelectedPokeLength.current) {
      // 현재값 > 이전 값 => 카드가 대시보드에 추가되었음
      // 그럼 ball부분에서 한개 삭제
      setBall((prev) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } else if (currentSelectedPokeLength < prevSelectedPokeLength.current) {
      // 현재값 < 이전값 => 카드가 대시보드에 삭제되었음
      // 그럼 ball 부분에서 한개 추가
      setBall((prev) => [
        ...prev,
        {
          img: "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png",
        },
      ]);
    }
    // useRef로 선언된 참조객체이기 때문에 값을 업데이트 하려면 .current속성 사용
    prevSelectedPokeLength.current = currentSelectedPokeLength;
  }, [selectedPoke]);

  return (
    <>
      <div className="dashboard">
        <h2>나만의 포켓몬</h2>
        <ul>
          {selectedPoke.slice(0, 6).map((item, index) => {
            return (
              <li key={index} className="selected">
                <img src={item.img_url} alt="" />
                <p>{item.korean_name}</p>
                <p>NO.0{item.id}</p>
                <button
                  onClick={() => {
                    delCard(item.id);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
          {ball.map((item, index) => {
            return (
              <li key={index} className="pokeball_img">
                <img src={item.img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DashBoard;
