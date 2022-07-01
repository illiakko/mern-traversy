const express = require('express')
const router = express.Router()
const {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', postGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

//as option can chain routes
// router.route('/').get(getGoals).post(postGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)




module.exports = router
