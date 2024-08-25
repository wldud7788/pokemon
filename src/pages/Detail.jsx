import React from "react";
import { Link, useLocation } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const location = useLocation();
  const pokeId = parseInt(location.search.slice(4));
  const mockData = MOCK_DATA;
  const filterData = mockData.filter((item) => item.id === pokeId);
  console.log("filterData", filterData);
  return (
    <>
      {filterData.map((item) => {
        return (
          <div key={item.id} className="detail_info">
            <div>
              <p>{item.korean_name}</p>
              <img src={item.img_url} alt="" />

              <p>타입: {item.types.join(",")}</p>
              <p>{item.description}</p>
              <Link to={"/dex"}>뒤로가기</Link>
              <p></p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Detail;
