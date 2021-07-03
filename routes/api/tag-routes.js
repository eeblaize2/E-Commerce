const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include:[{model:Product}]
  })
  .then(tags =>{
    res.status(200).json(tags)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findAll({
    include:[{model:Product}],
    where:{
      id: req.params.id
    }
  })
  .then(tag =>{
    res.status(200).json(tag)
  })
  .catch(error=>{
    res.status(404).send('tag not found')
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
   Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tag=>{
    res.status(201).json(tag)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },{
    where: {id:req.params.id}
  })
  .then(tag=>{
    res.status(200).send('item updated')
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id:req.params.id}
  })
  .then(tag=>{
    res.status(200).send('item deleted')
  })
});

module.exports = router;
