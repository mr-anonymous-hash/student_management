const router = require('express').Router();
const attendance_controller = require('./../controllers/attendance_controller')

router.get('/',attendance_controller.getAllAttendance)
router.get('/:id',attendance_controller.getAttendanceById)
router.post('/',attendance_controller.createAttendance)
router.put('/:id',attendance_controller.updateAttendance)
router.delete('/:id',attendance_controller.deleteAttendance)


module.exports = router;