const TYPERACE_URL = "https://play.typeracer.com/";

const main = async () => {
  const pageFactory = require("./pageFactory.js");
  const page = await pageFactory.build();

  await page.goto(TYPERACE_URL);

  const captcha = require("./captcha.js");
  await captcha.waitForManualCompletion(page);

  const navigateTo = require("./navigateTo.js");
  await navigateTo.practiceYourserf(page);

  const game = require("./game.js");
  await game.play(page);
};

main();
