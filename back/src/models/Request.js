const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    name: String,
    sex: String,
    application: String,
    age: String,
    selectedAnswers: {},
    documents: [String],
    charges: [String],
    rule: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", RequestSchema);
