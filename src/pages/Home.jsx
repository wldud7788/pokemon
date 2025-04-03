import Dex from "./Dex";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="wellcome-page">
      <div className="wellcome-content">
        <img
          src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
          alt="포켓몬 로고"
        />
        <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
      </div>
    </div>
  );
};

export default Home;
