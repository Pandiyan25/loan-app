const express = require('express');
const router = express.Router();
const { loanDetails, personalDetails, getLoanDetails, getPersonalDetails } = require('../controller/loan/loan');
router.route('/personalDetails/:id').get(getPersonalDetails);
router.route('/personalDetails').post(personalDetails);
router.route('/:id').get(getLoanDetails);
router.route('/').post(loanDetails);

module.exports = router;
