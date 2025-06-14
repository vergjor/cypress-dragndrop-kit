describe('Vertical sortable list', { retries: 2 }, () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=presets-sortable-vertical--basic-setup&viewMode=story');
        cy.get('li').should('have.length.above', 1);
    })

    context('dragTo()', () => {
        it('should be able to move the 3rd element on the 47th position within the list by using "dragTo()"', () => {
            cy.get('[data-id="3"]').dragTo('[data-id="47"]');

            cy.get('[data-id="47"]').should('have.attr', 'data-index', 46);
            cy.get('[data-id="3"]').should('have.attr', 'data-index', 47);
        })

        it('should be able to move the 16th element on the 12th position within the list by using "dragTo()"', () => {
            cy.get('[data-id="16"]').dragTo('[data-id="12"]');

            cy.get('[data-id="16"]').should('have.attr', 'data-index', 12);
            cy.get('[data-id="12"]').should('have.attr', 'data-index', 13);
        })
    })

    context('dragAndDrop()', () => {
        it('should be able to move the 3rd element on the 47th position within the list by using "dragTo()"', () => {
            cy.dragAndDrop('[data-id="3"]', '[data-id="47"]');

            cy.get('[data-id="47"]').should('have.attr', 'data-index', 46);
            cy.get('[data-id="3"]').should('have.attr', 'data-index', 47);
        })

        it('should be able to move the 16th element on the 12th position within the list by using "dragTo()"', () => {
            cy.dragAndDrop('[data-id="16"]', '[data-id="12"]');

            cy.get('[data-id="16"]').should('have.attr', 'data-index', 12);
            cy.get('[data-id="12"]').should('have.attr', 'data-index', 13);
        })
    })
});