const {Router} = require('express');
const controllers = require('../controllers')
//const middlewares = require('../middlewares')
const router = Router();

router.get('/films', controllers.getFilms)
//router.post('/', middlewares.characterValidation, controllers.createCharacter)


module.exports = router;