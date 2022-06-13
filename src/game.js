const EXPECTED_GAME_STATUS = "The race is on! Type the text below:";

module.exports.play = async (page) => {
  await waitForGameToStart(page);
  console.log("shit is on!");
};

const waitForGameToStart = async (page) => {
  await page.waitForTimeout(1000);
  console.log("Waiting for game to begin");
  const gameStatusLabel = await page.$(".gameStatusLabel");
  let gameStatus = "";
  while (gameStatus !== EXPECTED_GAME_STATUS) {
    gameStatus = await page.evaluate(
      (element) => element.textContent,
      gameStatusLabel
    );
    await page.waitForTimeout(50);
  }
};
