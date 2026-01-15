import LoginPage from '../../pages/LoginPage';

describe('Smoke - Login', () => {
  const loginPage = new LoginPage();

  it('User can login with valid credentials', () => {
    cy.fixture('users').then((users) => {
      loginPage.visit();
      loginPage.login(users.validUser.username, users.validUser.password);

      // Assertion: successful login redirects to products page
      cy.url().should('include', '/inventory');
    });
  });
});
