const mongoose = require('mongoose');

const personalUserInfoSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    dependents: { type: Number, required: true },
    maritalStatus: { type: String, required: true },
    residentialAddress: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    isPermanentAddressSame: {
      type: Boolean,
      required: true,
      default: false,
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

const PersonalInfo = mongoose.model('PersonalInfo', personalUserInfoSchema);

module.exports = PersonalInfo;
