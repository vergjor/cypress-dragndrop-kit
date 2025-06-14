# Cypress Drag & Drop Kit 🧩

A lightweight, Cypress-native plugin that simplifies drag‑and‑drop and movement interactions in end-to-end tests. Perfect for testing sortable lists, draggable elements, and custom UI components.


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

- `dragTo(targetElementLocator, options)`: Custom child command for dragging and dropping a chained element to a specified element location
- `dragAndDrop(sourceElementLocator, targetElementLocator, options)`: Custom command for dragging and dropping from one element location to another

<br/>

### ⚙️ Command Options
  
The `options` input parameter is an optional object for handling specific cases related to the drag-and-drop functionality.

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
```

<br/>

## 🤝 Contributing

Contributions are welcome! If you have ideas, bugs, or feature requests—feel free to open an issue or submit a pull request.
