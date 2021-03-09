const express = require('express');
const routes = express.Router();
const OngControllers = require('./Controllers/OngControllers')
const OngProfile = require('./Controllers/OngProfile')
const ProjectControllers = require('./Controllers/ProjectControllers')
const imgControlles = require('./Controllers/imgControlles');
const ListControllers = require('./Controllers/ListControllers');

// routes.get('/ongs/:id', OngProfile.index);

// routes.get('/ongs', OngControllers.index);
// routes.post('/ongs', OngControllers.create);
// routes.delete('/ongs/:id', OngControllers.delete)

routes.get('/images', imgControlles.index);
routes.post('/images', imgControlles.create);
routes.delete('/images/:id',imgControlles.delete)

routes.get('/list/:project_id', ListControllers.index)


routes.get('/project', ProjectControllers.index)
routes.post('/project', ProjectControllers.create)
routes.delete('/project/:id', ProjectControllers.delete)


module.exports = routes;