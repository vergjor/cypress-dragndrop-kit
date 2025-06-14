describe('Vertical sortable list with press delay', { retries: 2 }, () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=presets-sortable-vertical--press-delay&viewMode=story');
        cy.get('li').should('have.length.above', 1);
    })

    it('should be able to wait for the delay press before dragging and dropping an item by using "dragTo()"', () => {
        cy.get('[data-id="3"]').dragTo('[data-id="47"]', { pressDelay: 2000 });

        cy.get('[data-id="47"]').should('have.attr', 'data-index', 46);
        cy.get('[data-id="3"]').should('have.attr', 'data-index', 47);
    })

    it('should be able to wait for the delay press before dragging and dropping an item by using "dragTo()"', () => {
        cy.dragAndDrop('[data-id="47"]', '[data-id="3"]', { pressDelay: 2000 });

        cy.get('[data-id="47"]').should('have.attr', 'data-index', 3);
        cy.get('[data-id="3"]').should('have.attr', 'data-index', 4);
    })
});