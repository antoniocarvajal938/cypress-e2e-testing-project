class ProductsPage {
    private inventoryItems = '[data-test="inventory-item"]';
    private cartIcon = '-shopping-cart-link';

    isProductListVisible(): void {
        cy.get(this.inventoryItems).should('be.visible');
    }

    goToCart(): void {
        cy.get(this.cartIcon).click();
    }
}

export default ProductsPage;