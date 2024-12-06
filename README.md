# blrplate

This is an easy to use CLI tool, that will create a Shopify Online Store 2.0 boilerplate in the directory it was called at.

## **Try out boilerplate**:
https://blrplate.myshopify.com/

Password: blrplate
## **Getting started**:
```bash
npm i -g blrplate
```

### **Usage**:
```bash
blrplate create
```
**Preview**:

![](https://github.com/williamgregorio/blrplate/blob/dev/assets/blrplate-preview.gif)

Returns a valid Shopify theme structure for the developer.

## **Theme directory structure**:
### **`assets/`**
- Stores scripts, styles, and images.
  - `reset.css` 
  - `theme.js` 
  - `favicon.ico` 
---

### **`config/`**
- Manages theme settings.
  - `settings_schema.json` 
  - `settings_data.json` 
---

### **`layout/`**
- Defines the overall structure of pages.
  - `theme.liquid`
  - `password.liquid` 
---

### **`locales/`**
- Enables localization and translations.
  - `en.default.json` 
---

### **`sections/`**
- Modular content blocks.
  - **contact-form.liquid**
  - **featured-collection.liquid**
  - **footer.liquid**
  - **header.liquid**
  - **store-name.liquid**
  - **404.liquid**
  - **article.liquid**
  - **blog.liquid**
  - **cart.liquid**
  - **collection.liquid**
  - **customer-login.liquid**
  - **customer-register.liquid**
  - **list-collections.liquid**
  - **page.contact.liquid**
  - **page.liquid**
  - **product.liquid**
  - **reset-password.liquid**
  - **search.liquid**
---

### **`snippets/`**
- Reusable components for common features.
  - `meta-tags.liquid` 
  - `pagination.liquid` 
  - `product-card.liquid` 
  - `product-media.liquid` 
---

### **`templates/`**
- Defines the structure for specific pages.
  - `404.json` 
  - `article.json` 
  - `blog.json` 
  - `cart.json` 
  - `collection.json` 
  - `index.json` 
  - `list-collections.json` 
  - `page.contact.json` 
  - `page.json` 
  - `product.json` 
  - `search.json` 

#### **`templates/customers/`**
- Manages customer account-related pages.
  - `login.json` 
  - `register.json` 
  - `reset_password.json` 
---
