### MVP FullStack E-com Nextjs, Typescript, MongoDB, Firebase, 0Auth, Stripe

Online Store with Admin Dashboard to manage products and orders coupled to a frontend store where people can login and buy.

### Future updates :

- Fully Implement Setting for User where can manage Profil, addresses and Payment options or elses
- Implement Updating product from admin dashboard -> Manage Products
- Depend on what product type we sell, update the product prisma model and the front API to fit the needs, also update admin dashboard, frontend product display
- Implement Auto sending email after purchase to confirm ordering seccesfuly
- More responsive design // better UI

### smaller updates :

- NavBar.tsx = create svg compatible logo instead of actual Text format.
- NavBar.tsx = Make the design fully responsive
- Admin/NavBar.tsx = Make the design fully responsive
- Add posibility to download Orders from dashboard

### DATABASE :

ROLES :

USER -> Can create user account and add products to cart to buy them.
ADMIN -> Can add products, remove products, can manage orders.

![database-diagram](./public/database-diagram.svg)

### How To :

- update product add or remove data entry : modify :

  - prisma/schema.prisma
  - AddProductFrom.ts
  - api/product/route.ts
  - ManageProductsClient.tsx
  - ProductDetails.tsx

- modify product colors and categories in :
  - utils/Categories.ts
  - utils/Colors.ts
  - add any custom dynamic data needed by reating new files.
