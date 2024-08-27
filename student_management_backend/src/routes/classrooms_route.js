const router = require('express').Router();
const classrooms_controller = require('./../controllers/classroom_controller')

router.get('/',classrooms_controller.getAllclassrooms)
//router.get('/:id',classrooms_controller.getclassroomsById)
router.post('/',classrooms_controller.createclassrooms)
router.put('/:id',classrooms_controller.updateclassrooms)
router.delete('/:id',classrooms_controller.deleteclassrooms)

module.exports = router;