const mongoose = require('mongoose');

const SelfEmployeeSchema = mongoose.Schema(
  {
    incomeTaxReturns: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    profitLossStatement: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
    businessRegistrationDocuments: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
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
    businessOwnership: {
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

const SelfEmployeeProof = mongoose.model('SelfEmployeeProof', SelfEmployeeSchema);

module.exports = SelfEmployeeProof;
