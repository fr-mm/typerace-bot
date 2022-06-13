const PRACTICE_YOURSERF_BUTTON_TEXT = "Practice Yourself";

module.exports.practiceYourserf = async (page) => {
  await clickOnAElementWithText(PRACTICE_YOURSERF_BUTTON_TEXT, page);
};

const clickOnAElementWithText = async (text, page) => {
  console.log(`Waiting for "a" element with text: ${text}`);
  let linkHandlers = [];
  while (linkHandlers.length === 0) {
    linkHandlers = await page.$x(
      `//a[contains(text(), ${escapeXpathString(text)})]`
    );
    await page.waitForTimeout(200);
  }
  console.log(`Navigating to ${text}`);
  await linkHandlers[0].click();
};

const escapeXpathString = (text) => {
  const splitedQuotes = text.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};
