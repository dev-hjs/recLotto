const axios = require("axios");

const getLotteryNumbers = async (lotteryNumber) => {
  try {
    const response = await axios.get(
      `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${lotteryNumber}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = getLotteryNumbers;
