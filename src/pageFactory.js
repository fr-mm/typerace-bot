const LAUNCH_OPTIONS = {
  headless: false,
  args: ["--start-maximized"],
};

module.exports.build = async () => {
  console.log("Building page");
  const puppeteer = require("puppeteer-extra");
  const StealthPlugin = require("puppeteer-extra-plugin-stealth");
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch(LAUNCH_OPTIONS);
  return (await browser.pages())[0];
};
