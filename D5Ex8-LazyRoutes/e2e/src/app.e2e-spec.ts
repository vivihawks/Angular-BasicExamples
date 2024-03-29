import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
import { } from 'jasmine';

describe('providers App', () => {
  let page: AppPage;
  const buttons = element.all(by.css('button'));
  const customersButton = buttons.get(0);
  const ordersButton = buttons.get(1);
  const homeButton = buttons.get(2);

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Lazy loading feature modules');
  });

  describe('Customers', function() {
    beforeEach(function() {
      customersButton.click();
    });

    it('should show customers when the button is clicked', function() {
        let customersMessage = element(by.css('app-customers > p'));
        expect<any>(customersMessage.getText()).toEqual('customers works!');
    });

  });

  describe('Orders', function() {
    beforeEach(function() {
      ordersButton.click();
    });

    it('should show orders when the button is clicked', function() {
        let ordersMessage = element(by.css('app-orders > p'));
        expect<any>(ordersMessage.getText()).toEqual('orders works!');
    });

  });

});


