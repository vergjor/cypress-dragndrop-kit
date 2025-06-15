/// <reference types="cypress" />
/// <reference path="./types.d.ts" />

import {
  DraggableOption,
  calculateCoordinates, 
  params,
} from "./utils";

Cypress.Commands.add("dragTo", { prevSubject: 'element' }, (sourceElement, targetElement, options) => {
  cy.get(targetElement).first().then(([target]) => {
    cy.wrap(sourceElement).first().then(([source]) => {

      let sourceCoordinates = source.getBoundingClientRect();
      let targetCoordinates = target.getBoundingClientRect();

      const isScrollingDown = targetCoordinates.top - sourceCoordinates.top > 0;
      const isScrollingRight = targetCoordinates.right - sourceCoordinates.right > 0;

      if (isScrollingDown || isScrollingRight) {
        cy.get(targetElement).first().scrollIntoView();
      } else {
        sourceCoordinates = calculateCoordinates(sourceCoordinates);
        targetCoordinates = calculateCoordinates(targetCoordinates);
      }

      cy.wrap(source)
        .trigger("mousedown", params(sourceCoordinates))
        .wait(options?.pressDelay ?? 0)
        .trigger("mousemove", params(sourceCoordinates, 10));

      cy.get("body")
        .trigger("mousemove", params(targetCoordinates))
        .wait(1000)
        .trigger("mouseup", { force: true });
    });
  });
});

Cypress.Commands.add("dragAndDrop", (sourceElement: string, targetElement: string, options?: DraggableOption) => {
  cy.get(sourceElement).dragTo(targetElement, options);
});
