const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


//@route    GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})


//@route    POST /api/goals
const postGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})


//@route    PUT /api/goals:id
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})


//@route    DELETE /api/goals:id
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}