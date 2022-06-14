const EXPECTED_GAME_STATUS = "The race is on! Type the text below:";
const MS_BETWEEN_CHECK_IF_GAME_STARTED = 50;
const MS_BETWEEN_TYPE_LETTER = 100;

module.exports.play = async (page) => {
  await page.waitForTimeout(2000);
  await getText(page);
  await waitForGameToStart(page);
  const text = await getText(page);
  typeText(text, page);
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
    await page.waitForTimeout(MS_BETWEEN_CHECK_IF_GAME_STARTED);
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

const typeText = async (text, page) => {
  await page.type("input[class=txtInput]", text, {
    delay: MS_BETWEEN_TYPE_LETTER,
  });
};
