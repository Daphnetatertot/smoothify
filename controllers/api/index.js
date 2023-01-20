const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes= require('./commentRoute');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments',commentRoutes)

module.exports = router;
