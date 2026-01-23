import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';

describe('Smoke - Products', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    it('Products list is visible after login', () => {
        cy.fixture('users').then((users) => {
            loginPage.visit();
            loginPage.login(users.validUser.username, users.validUser.password);

            productsPage.isProductListVisible();

        })
    });
});