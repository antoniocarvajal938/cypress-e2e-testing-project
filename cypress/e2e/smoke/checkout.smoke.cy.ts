import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Smoke - Checkout', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    it('User can complete checkout succesfully', () => {
        //User from fixtures
        cy.fixture('users').then((users) => {
            //Login
            loginPage.visit();
            loginPage.login(users.validUser.username, users.validUser.password);

            //Add product to cart
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

            //Go to cart
            productsPage.goToCart();

            //Go to checkout
            cartPage.goToCheckout();

            //Fill checkout info
            checkoutPage.fillCheckoutInformation('Antonio', 'Carvajal', '12345');

            //Continue and finish checkout
            checkoutPage.continue();
            checkoutPage.finish();

            //Verify order confirmation
            checkoutPage.isConfirmationVisible();
        });
    });
});