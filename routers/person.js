const express = require('express')
const PersonCtrl = require('../controllers/person')

const router = new express.Router()

// GET ALL PLANS
router.post('/demo/register', PersonCtrl.addPerson),
// GET ESTABLISHMENT PLAN
router.get('/demo/greeting',  PersonCtrl.getAllPersons),



module.exports = router