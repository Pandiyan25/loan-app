const asyncHandler = require('express-async-handler');
const Loan = require('../../models/loanModel');
const Personal = require('../../models/personalModal');
const loanDetails = asyncHandler(async (req, res) => {
  const { loanAmountRequested, loanPurpose, loanTenure, interestRate, userID } = req.body;
  const loan = await Loan.create({
    loanAmountRequested,
    loanPurpose,
    loanTenure,
    interestRate,
    userID,
  });
  if (loan) {
    res.status(201).json({
      message: 'Loan Created Successfull',
    });
  } else {
    res.status(400);
    throw new Error('Failed to add the loan details');
  }
});

const personalDetails = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    nationality,
    dependents,
    maritalStatus,
    residentialAddress,
    country,
    state,
    pincode,
    isPermanentAddressSame,
    userID,
  } = req.body;
  const personalUser = await Personal.create({
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    nationality,
    dependents,
    maritalStatus,
    residentialAddress,
    country,
    state,
    pincode,
    isPermanentAddressSame,
    userID,
  });
  if (personalUser) {
    res.status(201).json({
      message: 'Personal details Created Successfull',
    });
  } else {
    res.status(400);
    throw new Error('Failed to add the user details');
  }
});

const getLoanDetails = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const loans = await Loan.find({ userID: userId });
    res.status(200).json({ message: 'success', data: loans });
  } catch (error) {
    res.status(500).json({ message: 'failed', error: 'Internal Server Error' });
  }
});

const getPersonalDetails = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  try {
    const personal = await Personal.find({ userID: userId });
    res.status(200).json({ message: 'success', data: personal });
  } catch (error) {
    res.status(500).json({ success: 'failed', error: 'Internal Server Error' });
  }
});

module.exports = { loanDetails, personalDetails, getLoanDetails, getPersonalDetails };
