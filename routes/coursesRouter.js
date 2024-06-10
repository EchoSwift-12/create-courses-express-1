const coursesModel = require('../models/courseModel')
const express = require('express')
const coursesRouter = express.Router()


coursesRouter.post('/', async(req, res) => {
  const {courseName, courseDescription} = req.body

  const newCourse = new coursesModel({
    courseName: courseName,
    courseDescription: courseDescription
  })

  await newCourse.save()
  res.json({
    message: 'Course Created'
  })
})

module.exports = coursesRouter
