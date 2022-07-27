Bank tech test

Requirements
You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

User stories

As a customer
so I can add money to my bank account
I want to be able to deposit money

As a customer
so I can take money out of my bank account
I want to be able to withdraw money

As a customer
so I can check my transactions
I want to see a bank statement with date, amount, balance

As a customer
so I can check the date of my transactions
I want the most recent transaction date appearing first in the bank statement

Setting up the project

1. Clone this repo

2. cd to the project directory

3. Install Node.js dependencies
   $ npm install

Testing

1. Install jest
   $ npm add jest
   $ npm install -g jest

2. Run tests
   $ jest

3. To see test coverage
   $ jest --run coverage

![alt text](http://url/to/bank-test.png)