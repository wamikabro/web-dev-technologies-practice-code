import { Builder, By, Key, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

(async function sendFacebookMessage() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Navigate to Facebook login page
    await driver.get("https://www.facebook.com/login");
    await driver.manage().window().maximize();

    // Input email and password from environment variables
    await driver.findElement(By.id("email")).sendKeys(process.env.FB_USERNAME);
    await driver.findElement(By.id("pass")).sendKeys(process.env.FB_PASSWORD);

    // Submit the login form
    await driver.findElement(By.name("login")).click();

    // Wait for the homepage to load
    await driver.wait(until.titleContains("Facebook"), 10000);

    // Navigate to the friend's profile page
    const friendProfileUrl = "https://www.facebook.com/wasiq.abro"; // Replace with the actual friend's profile URL
    await driver.get(friendProfileUrl);

    // Wait for and click the "Message" button
    console.log("Waiting for the Message button...");
    const messageButton = await driver.wait(
      until.elementLocated(By.xpath("//div[@aria-label='Message']")),
      10000
    );
    console.log("Message button located. Waiting for visibility...");
    await driver.wait(until.elementIsVisible(messageButton), 10000);

    await messageButton.click();
    console.log("Message button clicked.");

    // Wait for the message box to appear
    await driver.wait(
      until.elementLocated(By.xpath("//div[@aria-label='Message']")),
      10000
    );

    // Locate the message input area
    const messageInput = await driver.findElement(
      By.xpath("//div[@aria-label='Message']")
    );

    // Wait for the message input area to be visible
    await driver.wait(until.elementIsVisible(messageInput), 10000);

    // Wait for the "Send" button to be present
    const sendButton = await driver.wait(
      until.elementLocated(By.xpath("//div[@aria-label='Send a Like']")),
      10000
    );

    // Click the "Send" button
    await sendButton.click();
  } catch (error) {
    console.error("Error:", error);
  }
})();
