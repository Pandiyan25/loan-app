const mongoose = require('mongoose');

const loanSchema = mongoose.Schema(
  {
    loanAmountRequested: { type: Number, required: true },
    loanPurpose: { type: String, required: true },
    loanTenure: { type: Number, required: true },
    interestRate: {
      type: Number,
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

const Loan = mongoose.model('Loan', loanSchema);

// const testTour = new User({
//   name: 'The Floor',
//   email: 'pandiyan123@gmail.com',
//   password: '1213',
// });

// testTour.save().then((data) => {
//   console.log(data);
// });
module.exports = Loan;
