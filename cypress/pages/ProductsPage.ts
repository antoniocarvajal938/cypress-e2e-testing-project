class ProductsPage {
  private inventoryItems = '[data-test="inventory-item"]';
  private cartIcon = '.shopping_cart_link';

  // Checks that the products list is visible after login
  isProductListVisible(): void {
    cy.get(this.inventoryItems).should('be.visible');
  }

  // Adds a product to the cart based on its visible name
  addProductToCart(productName: string): void {
    const productId = productName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-');

    cy.get(`[data-test="add-to-cart-${productId}"]`).click();
  }

  // Navigates to the shopping cart page
  goToCart(): void {
    cy.get(this.cartIcon).click();
  }
}

export default ProductsPage;
