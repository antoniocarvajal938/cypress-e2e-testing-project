class LoginPage {
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';

  visit(): void {
    cy.visit('/');
  }

  login(username: string, password: string): void {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
}

export default LoginPage;
