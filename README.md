# Cypress Drag & Drop Kit 🧩

A lightweight, Cypress-native plugin that simplifies drag‑and‑drop and movement interactions in end-to-end tests. Perfect for testing sortable lists, draggable elements, and custom UI components.

> **IMPORTANT**: 
>  - Version `v1.0.11` and below of this package can be used with Cypress v14
>  - Version `v1.1.0` can be used with Cypress v15

<br/>


## 🚀 Installation

```bash
npm install --save-dev cypress-dragndrop-kit
```
<br/>

## 🛠 Usage

In order to start using the package, all you need to do is import it within you `./cypress/support/e2e.ts` file:

```typescript
// Location: cypress/support/e2e.ts
import 'cypress-dragndrop-kit';
```
<br/>

### ✨ Available commands

  | Command | Type |	Description |
  | --- | --- |	--- |
  | `cy.dragTo(target, options)` |	`Child command` |	Custom child command for dragging and dropping a chained element to a specified element location |
  | `cy.dragAndDrop(source, target, options)` |	`Parent command` |	Custom command for dragging and dropping from one element location to another |


<br/>

### ⚙️ Input parameters
  
#### Required

  | Parameter name | Type |	Default |	Description |
  | --- | --- |	--- |	--- |
  | `sourceElement` |	`string` |	/	| locator for the `source` element |
  | `targetElement` |	`string` |	/	| locator for the `target` element |

#### Optional

The `options` parameter is the third and only optional argument — an object used to configure specific aspects of the drag-and-drop behavior.

  | Option | Type |	Default |	Description |
  | --- | --- |	--- |	--- |
  | `pressDelay` |	`number` |	`0`	| Time delay (in milliseconds) after mouse down event, before initiating the dragging of the element. Useful for simulating long-press behavior |


<br/>

### 📘 Examples

```typescript
// Usage of "dragTo(target)"
it('should be able to drag and drop an item by using "dragTo()"', () => {
  cy.get('[data-id="3"]').dragTo('[data-id="47"]');

  cy.get('[data-id="47"]').should('have.attr', 'data-index', 46);
  cy.get('[data-id="3"]').should('have.attr', 'data-index', 47);
})

// Usage of "dragAndDrop(source, target)"
it('should be able to drag and drop an item by using "dragAndDrop()"', () => {
  cy.dragAndDrop('[data-id="47"]', '[data-id="3"]');

  cy.get('[data-id="47"]').should('have.attr', 'data-index', 3);
  cy.get('[data-id="3"]').should('have.attr', 'data-index', 4);
})

// Usage of "dragTo(target, { pressDelay })"
it('should be able to drag and drop an item after a 2 second delay by using "dragTo()"', () => {
  cy.get('[data-id="47"]').dragTo('[data-id="3"]', { pressDelay: 2000 });

  cy.get('[data-id="47"]').should('have.attr', 'data-index', 3);
  cy.get('[data-id="3"]').should('have.attr', 'data-index', 4);
})
```

<br/>

## 🤝 Contributing

Contributions are welcome! If you have ideas, bugs, or feature requests—feel free to open an issue or submit a pull request.
