describe('Swappable grid', { retries: 2 }, () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=presets-sortable-grid--swappable&viewMode=story');
        cy.get('li').should('have.length.above', 1);
    })

    it('should be able to swap two grid elements using "dragTo()"', () => {
        cy.get('[data-id="3"]').dragTo('[data-id="7"]');

        cy.get('[data-id="3"]').should('have.attr', 'data-index', 7);
        cy.get('[data-id="7"]').should('have.attr', 'data-index', 3);
    })

    it('should be able to swap two grid elements by using "dragAndDrop()"', () => {
       cy.dragAndDrop('[data-id="7"]', '[data-id="3"]');

        cy.get('[data-id="3"]').should('have.attr', 'data-index', 7);
        cy.get('[data-id="7"]').should('have.attr', 'data-index', 3);
    })
});