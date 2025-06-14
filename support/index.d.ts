import { DraggableOption } from "./types";

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @description Custom child command for dragging and dropping a chained element to a specified element location
             * @param targetElement locator for the target element
             * @example cy.get('[data-id="3"]').dragTo('[data-id="47"]');
             * 
             */
            dragTo(targetElement: string, options?: DraggableOption): void;

            /**
             * 
             * @description Custom command for dragging and dropping from one element location to another 
             * @param sourceElement locator for the source element
             * @param targetElement locator for the target element
             * @example cy.dragAndDrop('[data-id="3"]', '[data-id="47"]');
             * 
             */
            dragAndDrop(sourceElement: string, targetElement: string, options?: DraggableOption): void;
        }
    }
}