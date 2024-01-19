const express = require('express');
const router = express.Router();
const {
  employmentDetails,
  documentDetails,
  salaryDetails,
  selfDetails,
  getEmploymentDetails,
  getDocumentDetals,
} = require('../controller/loan/employment');
router.route('/document/selfemployee').post(selfDetails);
router.route('/document/salary').post(salaryDetails);
router.route('/document/:id').get(getDocumentDetals);
router.route('/document').post(documentDetails);
router.route('/:id').get(getEmploymentDetails);
router.route('/').post(employmentDetails);

module.exports = router;
