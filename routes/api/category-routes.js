const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
    // Find all categories and include its associated Products
    Category.findAll({
        include: [{
            model: Product
        }]
    }).then(rows => {
        res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value and include its associated Products
    const id = req.params.id;
    Category.findOne({
        where: { id },
        include: [{
            model: Product
        }]
    }).then(rows => {
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;