"use strict";
/// <reference types="cypress" />
Object.defineProperty(exports, "__esModule", { value: true });
require("./types");
const utils_1 = require("./utils");
Cypress.Commands.add("dragTo", { prevSubject: 'element' }, (sourceElement, targetElement, options) => {
    cy.get(targetElement).first().then(([target]) => {
        cy.wrap(sourceElement).first().then(([source]) => {
            var _a;
            let sourceCoordinates = source.getBoundingClientRect();
            let targetCoordinates = target.getBoundingClientRect();
            const isScrollingDown = targetCoordinates.top - sourceCoordinates.top > 0;
            const isScrollingRight = targetCoordinates.right - sourceCoordinates.right > 0;
            if (isScrollingDown || isScrollingRight) {
                cy.get(targetElement).first().scrollIntoView();
            }
            else {
                const startX = sourceCoordinates.left + sourceCoordinates.width / 2;
                const startY = sourceCoordinates.top + sourceCoordinates.height / 2;
                sourceCoordinates = Object.assign(Object.assign({}, sourceCoordinates), { x: startX, y: startY });
                const endX = targetCoordinates.left + targetCoordinates.width / 2;
                const endY = targetCoordinates.top + targetCoordinates.height / 2;
                targetCoordinates = Object.assign(Object.assign({}, targetCoordinates), { x: endX, y: endY });
            }
            cy.wrap(source)
                .trigger("mousedown", (0, utils_1.params)(sourceCoordinates))
                .wait((_a = options === null || options === void 0 ? void 0 : options.pressDelay) !== null && _a !== void 0 ? _a : 0)
                .trigger("mousemove", (0, utils_1.params)(sourceCoordinates, 10));
            cy.get("body")
                .trigger("mousemove", (0, utils_1.params)(targetCoordinates))
                .wait(1000)
                .trigger("mouseup", { force: true });
        });
    });
});
Cypress.Commands.add("dragAndDrop", (sourceElement, targetElement, options) => {
    cy.get(sourceElement).dragTo(targetElement, options);
});
