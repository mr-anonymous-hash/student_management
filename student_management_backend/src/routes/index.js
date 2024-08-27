const router = require('express').Router();


const attendanceRoute = require('./attendance_route');
const classroomsRoute = require('./classrooms_route');
const studentsRoute = require('./students_route');

router.use('/attendance',attendanceRoute)
router.use('/classrooms',classroomsRoute)
router.use('/students',studentsRoute)

module.exports = router;

