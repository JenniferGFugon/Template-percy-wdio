// import Page from './page.js';
const Page = require("./page.js");

class AJClientsPage extends Page {
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
  get homeTitle() {
    return $(".text-bg > h1");
  }
  get contactButton() {
    return $(".btnContact > a");
  }

  async selectJewerlyItem() {
    await this.jewerlyItem.waitForDisplayed();
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
  async selectHomeTittle() {
    await this.homeTitle.waitForDisplayed();
    await this.homeTitle.getText();
  }
  async selectHomeItemText() {
    await this.homeItem.waitForDisplayed();
    await this.homeItem.getText();
  }
  async selectContactButton() {
    await this.contactButton.waitForDisplayed();
    await this.contactButton.click();
  }
}

module.exports = new AJClientsPage();
