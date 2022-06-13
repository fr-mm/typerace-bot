const CAPTCHA_PAGE_TITLE = "Attention Required! | Cloudflare";

module.exports.waitForManualCompletion = async (page) => {
  while (pageIsCaptcha(page)) {
    await page.waitForTimeout(1000);
  }
  console.log("Captcha solved");
  await page.waitForNavigation();
};

const pageIsCaptcha = async (page) => {
  return (await page.title()) === CAPTCHA_PAGE_TITLE;
};
