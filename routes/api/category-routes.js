const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[{model:Product}]
  })
  .then(categories =>{
    res.status(200).json(categories)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findAll({
    include:[{model:Product}],
    where:{
      id: req.params.id
    }
  })
  .then(category =>{
    res.status(200).json(category)
  })
  .catch(error=>{
    res.status(404).send('category not found')
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const newCategory= Category.create({
    category_name: req.body.category_name
  })
  .then(category=>{
    res.status(201).json(category)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },{
    where: {id:req.params.id}
  })
  .then(category=>{
    res.status(200).send('item updated')
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id:req.params.id}
  })
  .then(category=>{
    res.status(200).send('item deleted')
  })
});

module.exports = router;
