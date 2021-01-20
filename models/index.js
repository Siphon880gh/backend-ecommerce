// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category has many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// One Products belongs to one Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

// One Product belongs to many Tag (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });

// One Tag belongs to many Product (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};