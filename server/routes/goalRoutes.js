const express = require('express')
const router = express.Router()
const {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getGoals)
router.post('/', protect, postGoal)
router.put('/:id', protect, updateGoal)
router.delete('/:id', protect, deleteGoal)

//as option can chain routes
// router.route('/').get(getGoals).post(postGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)




module.exports = router
