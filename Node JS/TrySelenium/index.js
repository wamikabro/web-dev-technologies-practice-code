import { Builder } from "selenium-webdriver";
import fs from "node:fs";
(async function captureScreenshot() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://google.com");
    await driver.takeScreenshot().then((image, err) => {
      fs.writeFile("screenshot.png", image, "base64", function (err) {
        if (err) console.log(err);
      });
    });
  } finally {
    await driver.quit();
  }
})();
