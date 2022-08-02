const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");
const AJPage = require("../pages/home.page");

describe("Visual test Aj page", function () {
  const PORT = 8000;
  const HOME_URL = `http://localhost:${PORT}`;

  let server = null;

  before(() => {
    server = httpServer.createServer({ root: `${__dirname}/../` });
    server.listen(PORT);
  });

  after(() => {
    server.close();
  });

  it("the user at the homepage", async function () {
    await browser.url(HOME_URL);
    await expect(await browser.getTitle()).toEqual("Aj");
    expect(await AJPage.selectHomeItem()).toBeDisplayed(true);
    await percySnapshot(browser, "homepage page");
  });
  it("the user clicks the jewerly item", async function () {
    await browser.url(HOME_URL);
    await AJPage.selectJewerlyItem();
  });
  it("the user clicks the contact item", async function () {
    await browser.url(HOME_URL);
    await AJPage.selectContactItem();
    await percySnapshot(browser, "contact section", {
      scope: ".contact",
    });
  });
  it("the user clicks the clients item", async function () {
    await browser.url(HOME_URL);
    await AJPage.selectClientItem();
  });
});
