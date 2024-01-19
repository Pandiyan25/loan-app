const asyncHandler = require('express-async-handler');
const Employment = require('../../models/employment');
const Document = require('../../models/document');
const SalaryProof = require('../../models/salary');
const SelfEmployeeProof = require('../../models/selfemployee');
const cloudinary = require('../../config/cloudinary');
const employmentDetails = asyncHandler(async (req, res) => {
  const { occupation, employeName, officialEmail, yearsOfExperience, monthlyIncome, employmentType, userID } = req.body;
  const employment = await Employment.create({
    occupation,
    employeName,
    officialEmail,
    yearsOfExperience,
    monthlyIncome,
    employmentType,
    userID,
  });
  if (employment) {
    res.status(201).json({
      message: 'Employment Created Successfull',
      data: employment,
    });
  } else {
    res.status(400);
    throw new Error('Failed to add the Employment details');
  }
});

const documentDetails = asyncHandler(async (req, res) => {
  const { aadharCard, passport, voterId, drivingLicense, userID } = req.body;
  const document = await Document.create({
    aadharCard,
    passport,
    voterId,
    drivingLicense,
    userID,
  });
  if (document) {
    res.status(201).json({
      message: 'Document Created Successfull',
      data: document,
    });
  } else {
    res.status(400);
    throw new Error('Failed to add the Document details');
  }
});

const salaryDetails = asyncHandler(async (req, res) => {
  const {
    annualIncomeProof,
    loanType,
    bankStatement,
    employmentProof,
    idCard,
    appointmentLetter,
    currentEmploymentProof,
    userID,
  } = req.body;
  const result1 = await cloudinary.uploader.upload(annualIncomeProof, {
    folder: 'ITR File',
    resource_type: 'raw',
  });
  const result2 = await cloudinary.uploader.upload(bankStatement, {
    folder: 'Bank Statement',
    resource_type: 'raw',
  });
  const result3 = await cloudinary.uploader.upload(employmentProof, {
    folder: 'Employee Proof',
    resource_type: 'raw',
  });
  const result4 = await cloudinary.uploader.upload(appointmentLetter, {
    folder: 'Appointment Letter',
    resource_type: 'raw',
  });
  const result5 = await cloudinary.uploader.upload(currentEmploymentProof, {
    folder: 'Current Employee',
    resource_type: 'raw',
  });
  const salary = await SalaryProof.create({
    annualIncomeProof: {
      public_id: result1.public_id,
      url: result1.secure_url,
    },
    loanType,
    bankStatement: {
      public_id: result2.public_id,
      url: result2.secure_url,
    },
    employmentProof: {
      public_id: result3.public_id,
      url: result3.secure_url,
    },
    idCard,
    appointmentLetter: {
      public_id: result4.public_id,
      url: result4.secure_url,
    },
    currentEmploymentProof: {
      public_id: result5.public_id,
      url: result5.secure_url,
    },
    userID,
  });
  if (salary) {
    res.status(201).json({
      message: 'Salary Proof Created Successfull',
    });
  } else {
    res.status(400);
    throw new Error('Failed to update');
  }
});

const selfDetails = asyncHandler(async (req, res) => {
  const {
    incomeTaxReturns,
    profitLossStatement,
    businessRegistrationDocuments,
    bankStatement,
    businessOwnership,
    userID,
  } = req.body;
  const result1 = await cloudinary.uploader.upload(incomeTaxReturns, {
    folder: 'ITR File2',
    resource_type: 'raw',
  });
  const result2 = await cloudinary.uploader.upload(profitLossStatement, {
    folder: 'Profit Loss',
    resource_type: 'raw',
  });
  const result3 = await cloudinary.uploader.upload(businessRegistrationDocuments, {
    folder: 'Business Registration',
    resource_type: 'raw',
  });
  const result4 = await cloudinary.uploader.upload(bankStatement, {
    folder: 'Bank Statement',
    resource_type: 'raw',
  });
  const result5 = await cloudinary.uploader.upload(businessOwnership, {
    folder: 'Business Ownership',
    resource_type: 'raw',
  });
  const selfEmployee = await SelfEmployeeProof.create({
    incomeTaxReturns: {
      public_id: result1.public_id,
      url: result1.secure_url,
    },
    profitLossStatement: {
      public_id: result2.public_id,
      url: result2.secure_url,
    },
    businessRegistrationDocuments: {
      public_id: result3.public_id,
      url: result3.secure_url,
    },
    bankStatement: {
      public_id: result4.public_id,
      url: result4.secure_url,
    },
    businessOwnership: {
      public_id: result5.public_id,
      url: result5.secure_url,
    },
    userID,
  });
  if (selfEmployee) {
    res.status(201).json({
      message: 'Self Employee Proof Created Successfull',
    });
  } else {
    res.status(400);
    throw new Error('Failed to update');
  }
});

const getEmploymentDetails = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  try {
    const employment = await Employment.find({ userID: userId });
    res.status(200).json({ message: 'success', data: employment });
  } catch (error) {
    res.status(500).json({ success: 'failed', error: 'Internal Server Error' });
  }
});

const getDocumentDetals = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  try {
    const document = await Document.find({ userID: userId });
    res.status(200).json({ message: 'success', data: document });
  } catch (error) {
    res.status(500).json({ success: 'failed', error: 'Internal Server Error' });
  }
});
module.exports = {
  employmentDetails,
  documentDetails,
  salaryDetails,
  selfDetails,
  getEmploymentDetails,
  getDocumentDetals,
};
