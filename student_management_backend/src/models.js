const sequelize = require('./database');
const { DataTypes } = require('sequelize');

// Classroom Model
const Classroom = sequelize.define('classrooms', {
  class_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Corrected the spelling of 'unique'
  }
});

// Students Model
const Students = sequelize.define('students', {
  student_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roll_no: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Attendance Model
const Attendance = sequelize.define('attendance', {
  attendance_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  roll_no: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  attendance_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

// Associations
Classroom.hasMany(Students, {
  foreignKey: 'class_name',
  sourceKey: 'class_name',
  as: 'students'
});

Students.belongsTo(Classroom, {
  foreignKey: 'class_name',
  targetKey: 'class_name',
  as: 'classroom'
});

Students.hasMany(Attendance, {
  foreignKey: 'roll_no',
  sourceKey: 'roll_no',
  as: 'attendances'
});

Attendance.belongsTo(Students, {
  foreignKey: 'roll_no',
  targetKey: 'roll_no',
  as: 'student'
});

// Sync the database and model
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  Classroom, Students, Attendance
};
