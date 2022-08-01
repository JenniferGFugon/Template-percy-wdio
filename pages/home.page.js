const Page = require("./page.js");

class AJPage extends Page {
  // Selector variables
  get jewerlyItem() {
    return $(".menu-area-main :nth-child(2)");
  }
  get contactItem() {
    return $(".menu-area-main :nth-child(3)");
  }
  get clientsItem() {
    return $(".menu-area-main :nth-child(4)");
  }
  get homeItem() {
    return $(".menu-area-main :nth-child(1)");
  }
  get contactSection() {
    return $(".contact");
  }
  async selectContactSection() {
    await this.contactSection.waitForDisplayed();
    //time for scrolling
    await this.contactSection.click();
  }
  async selectJewerlyItem() {
    await this.jewerlyItem.waitForDisplayed(); //time for scrolling
    await this.jewerlyItem.click();
  }
  async selectHomeItem() {
    await this.homeItem.waitForDisplayed();
    await this.homeItem.click();
  }
  async selectContactItem() {
    await this.contactItem.waitForDisplayed();
    await this.contactItem.click();
  }
  async selectClientItem() {
    await this.clientsItem.waitForDisplayed();
    await this.clientsItem.click();
  }
}

module.exports = new AJPage();
