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
        res.status(200).json(rows);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
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
        res.status(200).json(rows);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

router.post('/', (req, res) => {
    // create a new tag
    const { tag_name } = req.body;
    Tag.create({ tag_name })
        .then(row => {
            res.status(200).json(row);
        }).catch(err => {
            return res.status(400).json({ 'error': err });
        });
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
        res.status(200).send(isUpdated + "");
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    const id = req.params.id;
    Tag.destroy({
        where: { id }
    }).then(isDeleted => {
        res.status(200).send("" + isDeleted);
    }).catch(err => {
        return res.status(400).json({ 'error': err });
    });
});

module.exports = router;