const mongoose = require('mongoose');

const SalarySchema = mongoose.Schema(
  {
    annualIncomeProof: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    loanType: {
      type: String,
      required: true,
    },
    bankStatement: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    employmentProof: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    idCard: {
      type: String,
      required: true,
    },
    appointmentLetter: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    currentEmploymentProof: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestaps: true }
);

const SalaryProof = mongoose.model('SalaryProof', SalarySchema);

module.exports = SalaryProof;
