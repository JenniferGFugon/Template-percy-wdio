const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");

describe("home test page", function () {
  const PORT = 8000;
  const TEST_URL = `http://localhost:${PORT}`;

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
    await browser.url(TEST_URL);
    await expect(await browser.getTitle()).toEqual("Aj");
    expect(await AJPage.selectHomeItem()).toBeDisplayed(true);

    // expect(await AJPage.selectHomeItem()).toBeDisplayed(true);
    //await expect(AJPage.selectHomeTittle()).toEqual("Jewellery");
    await percySnapshot("homepage");
  });
  /*
  it("the user clicks the contact us button", async function () {
    await AJPage.selectContactButton();
    expect(browser).toHaveUrl("http://localhost/aj/contact.html");
  });*/
  /*
  it('Lets you check off a todo', async function () {
    await createTodo();

    let itemsLeft = await browser.execute(() => document.querySelector('.todo-count').textContent);
    expect(itemsLeft).toEqual('2 items left');

    let completeTodo = await $('input.toggle');
    await completeTodo.click();
    itemsLeft = await browser.execute(() => document.querySelector('.todo-count').textContent);
    expect(itemsLeft).toEqual('1 item left');

    await percySnapshot(browser, 'checked off todo');
  });*/
});
