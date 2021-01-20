const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags and include its associated Product data
    Tag.findAll({
        include: [{
            through: ProductTag,
            model: Product
        }]
    }).then(rows => {
        res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id` and include its associated Product data
    const id = req.params.id;
    Tag.findOne({
        where: { id },
        include: [{
            through: ProductTag,
            model: Product
        }]
    }).then(rows => {
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    // create a new tag
    const { tag_name } = req.body;
    Tag.create({ tag_name })
        .then(row => {
            res.json(row);
        })
});


router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    const { id } = req.params;
    const { tag_name } = req.body;
    Tag.update({ tag_name }, {
        where: {
            id
        }
    }).then(isUpdated => {
        res.send(isUpdated + "");
    })
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
});

module.exports = router;