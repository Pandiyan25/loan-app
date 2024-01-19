const mongoose = require('mongoose');

const EmploymentSchema = mongoose.Schema(
  {
    occupation: { type: String, required: true },
    officialEmail: { type: String, unique: true, required: true },
    employeName: { type: String, required: true },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    monthlyIncome: {
      type: Number,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    createdAt: { type: Date, default: Date.now },
  },
  { timestaps: true }
);

const Employment = mongoose.model('Employment', EmploymentSchema);

module.exports = Employment;
