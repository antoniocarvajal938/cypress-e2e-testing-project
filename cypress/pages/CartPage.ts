class CartPage {
    private cartItems = '[data-test="inventory-item"]';
    private checkoutButton = '[data-test="checkout"]';

    isCartItemVisible(): void {
        cy.get(this.cartItems).first().should('be.visible');
    }

    getCartItemCount(): void {
        cy.get(this.cartItems).should('have.length.greaterThan', 0);
    }

    goToCheckout(): void {
        cy.get(this.checkoutButton).click();
    }
}

export default CartPage;