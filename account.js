const Transaction = require("./transaction");

class Account {
  constructor(transaction = Transaction) {
    this.balance = 0.0;
    this.transactions = [];
    this.transaction = transaction;
    this.statement = [];
    this.header = "date || credit || debit || balance";
  }

  getBalance() {
    return this.balance;
  }

  deposit(value) {
    this.balance += value;
    this.transactions.push(
      new this.transaction("deposit", value, this.balance)
    );
    return this.balance;
  }

  withdraw(value) {
    this.balance -= value;
    this.transactions.push(
      new this.transaction("withdraw", value, this.balance)
    );
    return this.balance;
  }

  printStatement(transactions = this.transactions) {
    const statement =
      `${this.header}\n` + `${this.sortTransactions(transactions)}`;
    return console.log(statement);
  }

  sortTransactions(transactions) {
    transactions.forEach((transaction) => {
      this.transactionFormat(transaction);
    });
    return this.statement.reverse().join("\n");
  }

  transactionFormat(transaction) {
    if (transaction.type === "deposit") {
      this.statement.push(
        `${transaction.date} || ${transaction.amount.toFixed(
          2
        )} || || ${transaction.balance.toFixed(2)}`
      );
    }
    if (transaction.type === "withdraw") {
      this.statement.push(
        `${transaction.date} || || ${transaction.amount.toFixed(
          2
        )} || ${transaction.balance.toFixed(2)}`
      );
    }
  }
}

module.exports = Account;
