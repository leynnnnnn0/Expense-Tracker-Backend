import mongoose from "mongoose";

const expenseDetailSchema = mongoose.Schema(
  {
    reason: {
      type: String,
      default: "others",
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("expenses", expenseDetailSchema);

export default Expense;