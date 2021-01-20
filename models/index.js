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

// Products belongsToMany Tags (through ProductTag)

// Tags belongsToMany Products (through ProductTag)

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};