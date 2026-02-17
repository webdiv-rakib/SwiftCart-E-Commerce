# SwiftCart

Simple responsive e-commerce site built for an assignment.

Uses Fake Store API for real product data.

### Pages
- Home (index.html): hero banner, features, top-rated products, newsletter
- Products (products.html): category filters, full product grid, details modal
- About (about.html)
- Contact (contact.html)

### Features
- Responsive navbar with mobile hamburger menu
- Product cards: image, title (truncated), price, category badge, star rating
- Details modal with full info + add to cart
- Cart system: add items, quantity, remove, total price, localStorage
- Cart count badge in navbar
- Cart preview modal (click cart icon)

### Tech
- HTML
- Tailwind CSS v4 (CDN)
- DaisyUI v5 (CDN)
- Vanilla JavaScript
- Fake Store API

### How to run
1. Clone the repo
2. Open index.html in browser (or use Live Server)

### Assignment questions

1. null vs undefined  
   null = you set the value to nothing on purpose.  
   undefined = variable exists but has no value yet (not assigned).

2. map() vs forEach()  
   map() returns a new array with changed values.  
   forEach() just runs code on each item, doesn't return anything.

3. == vs ===  
   == checks value after type conversion ("5" == 5 is true).  
   === checks value and type strictly ("5" === 5 is false).

4. async/await for API calls  
   Lets you write promise code like normal synchronous code.  
   Makes it easier to read, handle errors with try/catch, and wait for data.

5. Scope in JS  
   - Global: outside everything, accessible anywhere  
   - Function: inside a function (var), only there  
   - Block: inside {} with let/const, only in that block
