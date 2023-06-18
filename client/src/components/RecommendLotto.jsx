import React, { useState } from "react";

function RecommendLotto() {
  const [lottoNums, setLottoNums] = useState([1, 2, 3, 4, 5, 6]);

  const lottoNumHandler = () => {
    const newNums = [];
    for (let i = 0; newNums.length < 6; i++) {
      const ranNum = Math.ceil(Math.random() * 45);
      if (newNums.indexOf(ranNum) > -1) continue;
      newNums.push(ranNum);
    }
    setLottoNums((prevNums) => (prevNums = newNums.sort((a, b) => a - b)));
  };

  return (
    <div>
      {lottoNums.map((number) => {
        return <div>{number}</div>;
      })}
      <button onClick={lottoNumHandler}>번호 추첨하기</button>
    </div>
  );
}

export default RecommendLotto;
