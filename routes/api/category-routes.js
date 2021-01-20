const express = require("express");
const router = express.Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', (req, res) => {
    // Find all categories and include its associated Products
    Category.findAll({
        include: [{
            model: Product
        }]
    }).then(rows => {
        res.status(200).json(rows);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

// get one category
router.get('/:id', (req, res) => {
    // find one category by its `id` value and include its associated Products
    const id = req.params.id;
    Category.findOne({
        where: { id },
        include: [{
            model: Product
        }]
    }).then(rows => {
        res.status(200).json(rows);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

// create new category
router.post('/', (req, res) => {
    // create a new category
    const { category_name } = req.body;
    Category.create({ category_name })
        .then(row => {
            res.status(200).json(row);
        }).catch(err => {
            return res.status(400).json({ 'error': err });
        });
});

// update category
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    const { id } = req.params;
    const { category_name } = req.body;
    Category.update({ category_name }, {
        where: {
            id
        }
    }).then(isUpdated => {
        res.status(200).send(isUpdated + "");
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

// delete category
router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    const id = req.params.id;
    Category.destroy({
        where: { id }
    }).then(isDeleted => {
        res.status(200).send("" + isDeleted);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

module.exports = router;