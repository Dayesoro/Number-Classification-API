import axios from "axios";

export const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

export const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num && num !== 1;
};

export const isArmstrong = (num) => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

export const getDigitSum = (num) =>
    num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);

export const getFunFact = async (num) => {
    try {
        const response = await axios.get(
            `http://numbersapi.com/${num}/math?json`
        );
        return response.data.text;
    } catch (error) {
        return "No fun fact available";
    }
};