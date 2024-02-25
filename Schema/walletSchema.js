import mongoose from "mongoose";

const walletSchema = mongoose.Schema({
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  expense: {
    type: Number,
    required: true,
    default: 0,
  },
  debt: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Wallet = mongoose.model("wallet", walletSchema, "wallets");


export default Wallet ;