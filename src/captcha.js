const CAPTCHA_PAGE_TITLE = "Attention Required! | Cloudflare";

module.exports.waitForManualCompletion = async (page) => {
  console.log("Waiting for manual captcha solving");
  while (await pageIsCaptcha(page)) {
    await page.waitForTimeout(1000);
  }
  console.log("Captcha solved");
};

const pageIsCaptcha = async (page) => {
  try {
    return (await page.title()) === CAPTCHA_PAGE_TITLE;
  } catch (error) {
    return true;
  }
};
