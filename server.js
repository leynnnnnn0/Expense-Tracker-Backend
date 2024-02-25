import express from "express";
import cors from "cors";
import connectionDb from "./database/connectionDb.js";
import Wallet from "./Schema/walletSchema.js";
import Expense from "./Schema/expenseSchema.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//Server
app.listen(8000, () => {
    console.log("Connected");
})

// Database 
connectionDb(`mongodb+srv://nathanielalvarez1234569:Plokinopki00@cluster10.14yy0qm.mongodb.net/wallets?retryWrites=true&w=majority&appName=Cluster10
`);

app.put("/update", async (req, res) => {
    const { _id, balance, expense, debt } = req.body;
    try {
        await Wallet.findByIdAndUpdate(
          _id, // Search condition based on _id
          {
            $set: {
              balance: parseFloat(balance),
              expense: parseFloat(expense),
              debt: parseFloat(debt),
            },
          }, // Update operation
          { new: true } // To return the updated document
        );

        res.send({message: "Created"});
        
    } catch (err) {
        console.log(err);
    }
})

app.post("/create", async (req, res) => {
    const { balance, expense, debt } = req.body;
    try {
        const wallet = new Wallet({
            balance,
            expense,
            debt
        })

        wallet.save();
        res.send({ message: "created successfully" });
    } catch(err) {
        console.log(err);
    }
})

app.post("/addExpense", async (req, res) => {
    const { reason, amount } = req.body;
    try {
        const expense = new Expense({
            reason,
            amount
        })
        expense.save();
        res.send({message: "added successfully!"})
    } catch (err) {
        console.log(err)
    }
})

app.get("/get", async (req, res) => {
    try {
        const result = await Wallet.find({});
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

app.post("/reasons", async (req, res) => {
    try {
        const result = await Expense.find({});
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

app.post("/updateExpense", async (req, res) => {
    const { _id, expense } = req.body;
    try {
        const result = await Wallet.findByIdAndUpdate(
          _id,
          {
            $set: {
              expense: parseFloat(expense),
            },
          },
          { new: true }
        );
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})



