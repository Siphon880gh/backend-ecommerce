backend-ecommerce
====
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Description
---
By Weng Fei Fung. Backend for Ecommerce websites. MySQL database with Sequelize ORM. Information are categories, products, and tags.

Video
---
Watch [Youtube video](https://www.youtube.com/watch?v=s-0sNWgcSIQ)

Table of Contents
---
- [Description](#description)
- [Video](#video)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

Installation
---
1. Create .env file with this contents:
```
DB_NAME=ecommerce_db
DB_USER=<YOUR_MYSQL_USERNAME>
DB_PW=<YOUR_MYSQL_USERNAME>
```
2. Install node modules
```
npm install
```

3. Source Schema
  - Login to MySql Shell: `mysql -u <username> -p`
  - Run MySql command to source schema.sql: `source db/schema.sql`
  - Quit MySql Shell: `quit`

4. Seed the tables
```
npm run seed
```

Usage
---
```
npm start
```


Make requests to the following routes at port 3001.

### Category Routes

- Get all categories
  - `GET api/categories`

- Get category by Id
  - `GET api/categories/:id`

- Post category
  - Request Body: `{category_name: STRING}`
  - `POST api/categories`

- Update category by Id
  - Request Body: `{category_name: STRING}`
  - `PUT api/categories/:id`


- Delete category by Id
  - `DELETE api/categories/:id`


### Product Routes

- Get all products
  - `GET api/products`

- Get product by Id
   - `GET api/products/:id`

- Post product
  - Request Body: `{
        product_name: STRING,
        price: DECIMAL,
        stock: INTEGER,
        tagIds: ARRAY<INTEGER>
      }`
  - `POST api/products`

- Update product by Id
  - Request Body: `{
        product_name: STRING,
        price: DECIMAL,
        stock: INTEGER,
        tagIds: ARRAY<INTEGER>
      }`
  - `PUT api/products/:id`

- Delete product by Id
  - `DELETE api/products/:id`

### Tag Routes

- Get all tags
  - `GET api/tags`

- Get tag by Id
  - `GET api/tags/:id`

- Post tag
  - Request Body: `{tag_name: STRING}`
  - `POST api/tags`

- Update tag by Id
  - Request Body: `{tag_name: STRING}`
  - `PUT api/tags/:id`
 
- Delete tag by Id
  - `DELETE api/tags/:id`

License
---
[MIT License](https://opensource.org/licenses/MIT)

Questions
---
- Where can I see more of your repositories?
	- Visit [Siphon880gh's Repositories](https://github.com/Siphon880gh)

- Where can I reach you?
	- You can reach me with additional questions at <a href='mailto:weffung@ucdavis.edu'>weffung@ucdavis.edu</a>.
	- Want to [hire me](https://www.linkedin.com/in/weng-fung/)?