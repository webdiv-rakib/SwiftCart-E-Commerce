# SwiftCart - Simple E-Commerce Website

A responsive single-page style e-commerce site built with HTML, Tailwind CSS + DaisyUI, and  JavaScript.

Uses the Fake Store API to load real product data.

## Features
- Responsive navbar with hamburger menu on mobile
- Hero banner with shop now button
- Why choose us section with icons
- Trending / top-rated products on home page
- Full products page with category filters
- Product cards with image, title, price, category badge, rating stars
- Details modal for each product
- Add to cart with quantity support + localStorage persistence
- Cart modal showing items, quantity controls, remove, total price, clear cart

## Tech Used
- HTML5
- Tailwind CSS v4 (CDN)
- DaisyUI v5 (CDN)
- Vanilla JavaScript
- Fake Store API[](https://fakestoreapi.com)

## How to Run
1. Clone the repo
2. Open `index.html` in a browser (or use Live Server)
3. Navigate between Home (`index.html`) and Products (`products.html`)

## Screenshots


## Assignment Questions

1. **Difference between null and undefined**  
   `undefined` means a variable has been declared but not assigned any value.  
   `null` means the value is intentionally set to "nothing" or "no value".

2. **Use of map() and difference from forEach()**  
   `map()` creates a new array by transforming each element (returns something).  
   `forEach()` just runs a function on each element but returns nothing (undefined).  
   Use `map()` when you want a transformed copy, `forEach()` when you just want side effects.

3. **Difference between == and ===**  
   `==` compares values after type coercion (loose equality).  
   `===` compares both value and type (strict equality) — no coercion.

4. **Significance of async/await in fetching API data**  
   `async/await` makes promise-based code look synchronous and easier to read.  
   Instead of chaining `.then()`, you can write clean try/catch blocks and wait for data naturally.

5. **Scope in JavaScript (Global, Function, Block)**  
   - **Global scope**: Variables declared outside any function — accessible everywhere.  
   - **Function scope**: Variables declared with `var` inside a function — only accessible inside that function.  
   - **Block scope**: Variables declared with `let` or `const` inside `{}` (if, for, etc.) — only accessible inside that block.
