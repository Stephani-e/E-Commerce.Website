# 🛒 E-Commerce Website (React)

A fully functional, responsive e‑commerce web application built with React. This app lets users browse products, add/remove items from the cart, update quantities, view a dynamic subtotal, and simulate a checkout flow using React Context for state management.

## Demo 

🔗 **Live Demo:** https://e-commerce-website-eta-pink.vercel.app/

## Features

- Add/remove products from cart
- Product detail view with pricing & images
- Shopping cart with quantity updates and subtotal calculations
- Simulated checkout page
- Fully responsive (mobile, tablet, desktop)
- Clean, modular component structure
  
## Tech Stack

- **Frontend:**
     - React (functional components)
     - React Router (multi‑page navigation)
     - Custom CSS modules/files for styling (no UI framework)
- **State Management:**
     - React Context API (cart items, totals, modal state, actions)

## Project Structure

- `src/`
    - `components/`
       - `navbar.css`
       - `navbar.js`
    - `shop/`
       - `shop-context.jsx`
       - `ShopContextProvider.jsx`
    - `pages/`
       - `cart`
          - `cart.css`
          - `cart.jsx`
          - `cart-item.jsx`
       - `shop`
          - `product.jsx`
          - `shop.css`
          - `shop.jsx`

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Stephani-e/E-Commerce.Website.git
   cd Quiz-App
2. Install Dependencies:
   ```bash
   npm install
3. Start the development server
   ```bash
   npm start
