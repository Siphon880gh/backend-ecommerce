const express = require("express");
const router = express.Router();
const { Category, Product } = require('../../models');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

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
    const { category_name } = req.body;
    Category.create({ category_name })
        .then(row => {
            res.json(row);
        })
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    const { id } = req.params;
    const { category_name } = req.body;
    Category.update({ category_name }, {
        where: {
            id
        }
    }).then(isUpdated => {
        res.send(isUpdated + "");
    })
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;