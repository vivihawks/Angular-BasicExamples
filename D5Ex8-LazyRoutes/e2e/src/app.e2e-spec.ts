import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
<<<<<<< HEAD

=======
import { } from 'jasmine';
>>>>>>> c2747ff (Angular 12 Upgrade)

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
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Lazy loading feature modules');
=======
    expect(page.getTitleText()).toContain('Lazy loading feature modules');
>>>>>>> c2747ff (Angular 12 Upgrade)
  });

  describe('Customers', function() {
    beforeEach(function() {
      customersButton.click();
    });

    it('should show customers when the button is clicked', function() {
        let customersMessage = element(by.css('app-customers > p'));
<<<<<<< HEAD
        expect(customersMessage.getText()).toBe('customers works!');
=======
        expect<any>(customersMessage.getText()).toEqual('customers works!');
>>>>>>> c2747ff (Angular 12 Upgrade)
    });

  });

  describe('Orders', function() {
    beforeEach(function() {
      ordersButton.click();
    });

    it('should show orders when the button is clicked', function() {
        let ordersMessage = element(by.css('app-orders > p'));
<<<<<<< HEAD
        expect(ordersMessage.getText()).toBe('orders works!');
=======
        expect<any>(ordersMessage.getText()).toEqual('orders works!');
>>>>>>> c2747ff (Angular 12 Upgrade)
    });

  });

});


