const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");
const AJPage = require("../pages/home.page");
const homePage = require("../pages/home.page");

describe("Visual test Aj page", function () {
  const PORT = 8000;
  const HOME_URL = `http://localhost:${PORT}`;

  let server = null;

  before(() => {
    // Start local server to host app under test.
    server = httpServer.createServer({ root: `${__dirname}/../` });
    server.listen(PORT);
  });

  after(() => {
    // Shut down the HTTP server.
    server.close();
  });

  it("the user at the homepage", async function () {
    await browser.url(HOME_URL);
    await expect(await browser.getTitle()).toEqual("Aj");
    //await percySnapshot("homepage page");
  });
  it("the user clicks the jewerly item", async function () {
    await browser.url(HOME_URL);
    await homePage.selectJewerlyItem();
    //await expect(await homePage.selectJewerlyTittle()).toEqual("b");
    await percySnapshot("homepage page");
  });
});
