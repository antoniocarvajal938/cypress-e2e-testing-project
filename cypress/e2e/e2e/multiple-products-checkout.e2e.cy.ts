import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('E2E - Multiple Products Checkout', () => {
    const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('User can complete checkout with multiple products', () => {
    cy.fixture('users').then((users) => {
        //Login 
        loginPage.visit();
        loginPage.login(users.validUser.username, users.validUser.password);

        //Add multiple products to cart
        productsPage.addProductToCart('Sauce Labs Backpack');
        productsPage.addProductToCart('Sauce Labs Bike Light');

        //Go to cart
        productsPage.goToCart();

        //Validate cart contains items
        cartPage.getCartItemCount();

        //Proceed to checkout
        cartPage.goToCheckout();

        //Fill checkout information
        checkoutPage.fillCheckoutInformation('Antonio', 'Carvajal', '12345');

        //Complete checkout
        checkoutPage.continue();
        checkoutPage.finish();

        //Validate order confirmation 
        checkoutPage.isConfirmationVisible();
    });
  });
});