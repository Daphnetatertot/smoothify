const router = require('express').Router();
const userRoutes = require('./userRoutes'); // edit name
// const projectRoutes = require('./projectRoutes'); // edit name

router.use('/users', userRoutes); //edit names
// router.use('/projects', projectRoutes); //edit names

module.exports = router;
