import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';

describe('Smoke - Add to Cart', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();

    it('User can add a product to the cart', () => {
        cy.fixture('users').then((users) => {
            loginPage.visit(); 
            loginPage.login(users.validUser.username, users.validUser.password);

            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

            productsPage.goToCart();

            cartPage.isCartItemVisible();
        });
    });
});