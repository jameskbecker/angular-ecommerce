describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/products/stone-island');

    const btn = () => cy.get('app-button');

    btn().contains('M').click();
    btn().contains('XL').click();
    btn().contains('S').click();
    btn().contains('L').click();

    cy.get('app-input[placeholder="Quantity"]').type('2');

    btn().contains('Add to Cart').click();

    const cartLink = cy.get('a').contains('Cart');

    cartLink.should('have.html', 'Cart (4)');

    cy.visit('/cart');
  });
});
