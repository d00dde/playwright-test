import { assert }  from "chai";
import BrowserRunner from "../src/helper/BrowserRunner";
import { Button } from "../src/component/Button";
import { Input } from "../src/component/Input";
import { positive } from "../src/fixture/example";

let browser: BrowserRunner;

describe("Google. Input.", function () {
  positive.forEach(({ name, testData }) => {
    test(name, async () => {
      const browser = await BrowserRunner.initChromium();
      const page = await browser.getPage();
      await page.goto("https://google.com");
      const declineCookiesButton = new Button(page, "//*[text()='Ich stimme zu']");
      await declineCookiesButton.click();
      const searchInput = new Input(page,"input");
      await searchInput.type(testData.inputText);
      const searchButton = new Button(page, "//*[@value='Google Suche']");
      await searchButton.click();
      const url = new URL(page.url());
      assert.equal(url.searchParams.get("q"), testData.inputText, "Search query");
      await browser.close();
    })
  });
});

afterEach(async () => {
  if (browser) {
    await browser.close();
  }
});
