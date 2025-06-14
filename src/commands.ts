/// <reference types="cypress" />

import "./types";
import { DraggableOption, params } from "./utils";


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
        const startX = sourceCoordinates.left + sourceCoordinates.width / 2;
        const startY = sourceCoordinates.top + sourceCoordinates.height / 2;
        sourceCoordinates = { ...sourceCoordinates, x: startX, y: startY };

        const endX = targetCoordinates.left + targetCoordinates.width / 2;
        const endY = targetCoordinates.top + targetCoordinates.height / 2;
        targetCoordinates = { ...targetCoordinates, x: endX, y: endY };
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
