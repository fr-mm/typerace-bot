const EXPECTED_GAME_STATUS = "The race is on! Type the text below:";

module.exports.play = async (page) => {
  await page.waitForTimeout(2000);
  await getText(page);
  await waitForGameToStart(page);
  const text = await getText(page);
  console.log(`final: ${text}`);
};

const waitForGameToStart = async (page) => {
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

const getText = async (page) => {
  const elements = await page.$x('//span[@unselectable="on"]');
  let text = "";

  for (let element of elements) {
    text += await page.evaluate(
      (elementHandler) => elementHandler.textContent,
      element
    );
  }
  return text;
};
