const mongoose = require('mongoose');
const DocumentSchema = mongoose.Schema(
  {
    aadharCard: { type: String, required: true },
    passport: { type: String, unique: true, required: true },
    voterId: { type: String, required: true },
    drivingLicense: {
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

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;
