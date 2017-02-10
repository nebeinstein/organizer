import { browser, element, by } from 'protractor';

export class OrganizerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('co-root h1')).getText();
  }
}
