class CheckoutPage {
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';
    private finishButton = '[data-test="finish"]';
    private confirmationHeader = '[data-test="complete-header"]';

    //Fill in checkout information
    fillCheckoutInformation(
        firstName: string,
        lastName: string, 
        postalCode: string,
    ): void {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
    }

    //Click continue button
    continue(): void {
        cy.get(this.continueButton).click();
    }

    //Click finish button
    finish(): void {
        cy.get(this.finishButton).click();
    }

    //Verify order confirmation
    isConfirmationVisible(): void {
        cy.get(this.confirmationHeader).should('be.visible');
    }
}

export default CheckoutPage;