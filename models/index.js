// import models
const Product = require("./Product")
const Category = require("./Category")
const Tag = require("./Tag")
const ProductTag = require("./ProductTag")

// Products belongsTo Category

Product.belongsTo(Category, {
    foreignKey: "catergory_id",
})

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: "producttag_id",
})

// Tags belongToMany Products (through ProductTag)
Category.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "product_id",
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
}
