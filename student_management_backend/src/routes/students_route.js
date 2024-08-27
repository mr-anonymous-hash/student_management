const router = require('express').Router();
const students_controller = require('./../controllers/students_controller')

router.get('/',students_controller.getAllstudents)
router.get('/:class_name',students_controller.getstudentsByClass)
router.post('/',students_controller.createstudent)
router.put('/:id',students_controller.updatestudents)
router.delete('/:id',students_controller.deletestudents)

module.exports = router;