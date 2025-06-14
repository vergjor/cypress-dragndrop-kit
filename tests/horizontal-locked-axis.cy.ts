describe('Horizontal locked axis', { retries: 2 }, () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=presets-sortable-horizontal--locked-axis&viewMode=story');
        cy.get('li').should('have.length.above', 1);
    })

    it('should be able to horizontally drag and drop an item from left to right by using "dragTo()"', () => {
        cy.get('[data-id="3"]').dragTo('[data-id="47"]');

        cy.get('[data-id="47"]').should('have.attr', 'data-index', 46);
        cy.get('[data-id="3"]').should('have.attr', 'data-index', 47);
    })

    it('should be able to horizontally drag and drop an item from right to left by using "dragAndDrop()"', () => {
        cy.dragAndDrop('[data-id="47"]', '[data-id="3"]');

        cy.get('[data-id="47"]').should('have.attr', 'data-index', 3);
        cy.get('[data-id="3"]').should('have.attr', 'data-index', 4);
    })
});