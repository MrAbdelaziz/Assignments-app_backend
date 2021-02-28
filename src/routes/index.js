const express = require('express');
const router = express.Router();

/**
 * * ROUTES
 */
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const assignementRoutes = require('../routes/AssignementRoute');
const devoirRoutes = require('../routes/devoirRoutes');
const matiereRoutes = require('../routes/matiereRoute');

router.use('/auth', authRoutes); // auth routes
router.use('/users', userRoutes); // user routes
router.use('/assignements', assignementRoutes); // Assignement routes
router.use('/devoires', devoirRoutes); // Devoir routes
router.use('/matieres', matiereRoutes); // Matiere routes

module.exports = router;
