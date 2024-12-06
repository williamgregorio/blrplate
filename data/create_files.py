# Python script to create files from a list of filenames
import os

# List of filenames with "template-" removed
filenames = [
    "contact-form.liquid",
    "featured-collection.liquid",
    "footer.liquid",
    "header.liquid",
    "store-name.liquid",
    "404.liquid",
    "article.liquid",
    "blog.liquid",
    "cart.liquid",
    "collection.liquid",
    "customer-login.liquid",
    "customer-register.liquid",
    "list-collections.liquid",
    "page.contact.liquid",
    "page.liquid",
    "product.liquid",
    "reset-password.liquid",
    "search.liquid",
]

# Create each file in the current directory
for filename in filenames:
    with open(filename, 'w') as file:
        # Add any default content here if needed
        file.write("")  # Creates an empty file
    print(f"Created: {filename}")

print("All files have been created!")

