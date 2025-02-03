# Classify Number API

## Description

Classify Number API is a simple RESTful service that takes an integer as input and returns interesting mathematical properties about it, along with a fun fact.

## Features

✅ Checks if a number is Prime

✅ Checks if a number is Perfect

✅ Checks if a number is an Armstrong number

✅ Determines if the number is Even or Odd

✅ Calculates the Sum of its Digits

✅ Retrieves a Fun Fact about the number from the Numbers API


## 🛠 Technology Stack

Node.js - Runtime Environment

Express.js - Web Framework

Axios - Fetching fun facts from Numbers API

CORS - Cross-Origin Resource Sharing

dotenv - Environment variable management

## 🚀 Run Locally

Clone this repository:

```bash
  git clone https://github.com/Dayesoro/Number-Classification-API.git

  cd classify-number-api
```

Install dependencies:

```bash
  npm install
```


Start the server:

```bash
  npm run start
```

📡 API Endpoint

GET /api/classify-number?number=<integer>

📝 Request Example:

GET http://localhost:3000/api/classify-number?number=371

✅ Response Example (200 OK):

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

❌ Response Example (400 Bad Request):

{
    "number": "abc",
    "error": true
}

