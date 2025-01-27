## Overview
This is the main user-facing website for the e-commerce platform, built using **Next.js** and **TypeScript**. It provides a seamless shopping experience for customers, including features such as product browsing, search, filtering, and a secure checkout process. This site is connected to the admin panel, ensuring that any updates made by administrators reflect in real-time for users.

## Features
- **Product Browsing**: View a wide range of products with images, descriptions, and prices.
- **Search and Filtering**: Easily find products using search and filter options (by category, price, size, or color).
- **Product Details**: View detailed product pages with high-quality images and complete descriptions.
- **Cart and Checkout**: Add products to the cart and complete purchases securely using Stripe.
- **Real-Time Updates**: Changes made in the admin panel (e.g., product updates, price changes) reflect instantly on the user website.
- **Responsive Design**: Optimized for all devices, including mobile, tablet, and desktop.

## Technologies Used
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: CSS/SCSS or a CSS-in-JS solution like Tailwind CSS (optional)
- **State Management**: Context API, Redux, or any state management library (if used)
- **Database**: Prisma
- **API**: RESTful APIs for backend integration with the admin panel
- **Payment**: Stripe for handling payments

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/smit455/big_bazaar-store.git
   cd big_bazaar-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables. Example:
   ```env
   API_BASE_URL="http://localhost:3000/api/[storeId]"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3001`.


## Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run linting

## Key Features Description

### 1. Product Browsing
Users can explore all available products on the homepage, with pagination for large inventories.

### 2. Search and Filtering
Users can search for products by name or filter them by:
- Categories
- Sizes and colors

### 3. Product Details
Each product has a dedicated page displaying:
- High-resolution images
- Description
- Price
- Available sizes and colors
- Add-to-cart functionality

### 4. Cart and Checkout
Users can:
- Add products to their cart
- Remove products from the cart
- Proceed to checkout, where payments are securely processed using Stripe

### 5. Real-Time Updates
Any changes made in the admin panel, such as new products or price updates, are reflected instantly on the user-facing website.

---

For admin-related tasks such as managing products, categories, and order details, visit the [Admin Panel](https://big-bazaar-admin-d1ug.vercel.app/)
