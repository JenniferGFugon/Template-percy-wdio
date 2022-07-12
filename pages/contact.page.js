const Page = require("./page.js");

class AJContactPage extends Page {
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
  get nameInput() {
    return $('[name="Name"]');
  }
  get phoneInput() {
    return $('[name="Phone Number"]');
  }
  get emailInput() {
    return $('[name="Email"]');
  }
  get messageInput() {
    return $('[name="Message"]');
  }
  get sendButton() {
    return $(".contact .contact .send");
  }
  get confirmationMessage() {
    return $('[name="Message"]');
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

  async selectHomeItemText() {
    await this.homeItem.waitForDisplayed();
    await this.homeItem.getText();
  }
  async selectContactButton() {
    await this.contactButton.waitForDisplayed();
    await this.contactButton.click();
  }
  async setName() {
    await this.nameInput.waitForDisplayed();
    await this.nameInput.setValue("Jennifer ");
  }
  async setPhone() {
    await this.phoneInput.waitForDisplayed();
    await this.phoneInput.setValue("9999-9999");
  }
  async setEmail() {
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue("jennifer.guerrero@helloiconic.com");
  }
  async setMessage() {
    await this.messageInput.waitForDisplayed();
    await this.messageInput.setValue("mensaje");
  }
  async selectsendButton() {
    await this.sendButton.waitForDisplayed();
    try {
      await this.sendButton.click();
    } catch (error) {} //sacrifice click  :)
    await this.sendButton.waitForDisplayed(3000); //time for scrolling
    await this.sendButton.moveTo(); //this will work

    await this.sendButton.click(); //this will work
  }
  async selectMessage() {
    await this.confirmationMessage.waitForDisplayed();
    try {
      await this.confirmationMessage.click();
    } catch (error) {} //sacrifice click  :)
    await this.confirmationMessage.waitForDisplayed(3000); //time for scrolling
    await this.confirmationMessage.moveTo(); //this will work
    await this.confirmationMessage.getText();
  }
}

module.exports = new AJContactPage();
