import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import RecommendLotto from "./components/RecommendLotto";

function App() {
  const [lotteryData, setLotteryData] = useState(null);
  const [lotteryRoundNumber, setLotteryRoundNumber] = useState(null);

  const callApi = async () => {
    const res = await axios.get(`/api?drwNo=${lotteryRoundNumber || 1072}`);
    setLotteryRoundNumber(res.data.drwNo);
    setLotteryData(res.data);
  };

  useEffect(() => {
    callApi();
  }, []);

  const roundNumBtnHandler = (e) => {
    e.preventDefault();
    callApi();
  };

  return (
    <div className="App">
      {lotteryData ? (
        <div id="banner">
          <form>
            해당 회차
            <input
              type="text"
              value={lotteryRoundNumber}
              onChange={(e) => {
                setLotteryRoundNumber(e.target.value);
              }}
              placeholder="회차 선택"
            ></input>
            <button onClick={roundNumBtnHandler}>확인</button>
          </form>

          <h2>로또 데이터</h2>
          <p>날짜: {lotteryData.drwNoDate}</p>
          <p>1등 당첨자 수: {lotteryData.firstPrzwnerCo}</p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
      <RecommendLotto />
    </div>
  );
}

export default App;
