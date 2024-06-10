const { Schema, model } = require('mongoose')

const coursesSchema = new Schema({
  courseName: String,
  courseDescription: String
})

const coursesModel = model('courses', coursesSchema)

module.exports = coursesModel

