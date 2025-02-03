import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { isPrime, isPerfect, isArmstrong, getDigitSum, getFunFact } from "./helpers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


// API Route
app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number: "alphabet", error: true });
    }

    const num = parseInt(number, 10);
    const properties = [];

    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    const result = {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: getDigitSum(num),
        fun_fact: await getFunFact(num),
    };

    res.json(result);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
