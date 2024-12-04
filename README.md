# blrplate

This is a easy to use CLI tool, to quicky create a Shopify Online Store 2.0 boilerplate.

### Planned usage:
```bash
blrplate create
```
**Returns a valid Shopify theme theme structure for the developer to add on and make it their own**

## **Theme directory structure**:
These are the basic planning to give the user when creating one, aka bare bones but enought to influence it with your own ideas.

### **`assets/`**
- Stores scripts, styles, and images.
  - `reset.css` - Resets browser-specific styles for a neutral starting point.
  - `theme.js` - Handles basic interactivity for the theme.
  - `favicon.ico` - Favicon.
---

### **`config/`**
- Manages theme settings.
  - `settings_schema.json` - Allows customization through the Shopify admin.
  - `settings_data.json` - Saves the selected options from the theme editor.
---

### **`layout/`**
- Defines the overall structure of pages.
  - `theme.liquid` - Core layout for general pages (header, footer, content).
  - `password.liquid` - Password-protected store layout for pre-launch.
---

### **`locales/`**
- Enables localization and translations.
  - `en.default.json` - Base translation file.
---

### **`sections/`**
- Modular content blocks.
  - `header.liquid` - Header with navigation and search.
  - `footer.liquid` - Footer with links and credits.
  - `main-product.liquid` - Product page section for displaying product details.
---

### **`snippets/`**
- Reusable components for common features.
  - `product-card.liquid` - Renders products in a collection grid.
  - `cart-items.liquid` - Displays cart items dynamically.
  - `checkout-button.liquid` - Button to proceed to checkout.
---

### **`templates/`**
- Defines the structure for specific pages.
  - `index.liquid` - Homepage template.
  - `product.liquid` - Product details page template.
  - `collection.liquid` - Collection (category) template.
  - `cart.liquid` - Cart page for reviewing items.
  - `blog.liquid` - Blog overview page.
  - `article.liquid` - Blog article page.
  - `search.liquid` - Search results page.

#### **`templates/customers/`**
- Manages customer account-related pages.
  - `login.liquid` - Login page for customers.
  - `register.liquid` - Customer registration page.
  - `account.liquid` - Customer account dashboard.
  - `order.liquid` - Order history page.

---
