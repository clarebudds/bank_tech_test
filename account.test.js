const Account = require("./account");
const Transaction = require("./transaction");

describe("Account", () => {
  let account;
  let transaction;

  it("a new bank account has a balance of 0", () => {
    const account = new Account();
    expect(account.getBalance()).toBe(0);
  });

  it("customer can deposit money into their bank account and balance is updated", () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.getBalance()).toEqual(1000);
  });

  it("customer can deposit multiple amounts into their bank account and balance is updated", () => {
    const account = new Account();
    account.deposit(1000);
    account.deposit(2000);
    expect(account.getBalance()).toBe(3000);
  });

  it("customer can withdraw money from their bank acccount and balance is updated", () => {
    const account = new Account();
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.getBalance()).toBe(2500);
  });

  describe(`View transactions`, () => {
    it(`Transactions contain the deposit transaction data`, () => {
      account = new Account();
      transaction = new Transaction();
      const expected = [
        {
          amount: 1000,
          balance: 1000,
          date: `${transaction.date}`,
          type: "deposit",
        },
      ];

      account.deposit(1000);

      expect(account.transactions).toEqual(expect.arrayContaining(expected));
    });

    it(`Transactions contain withdrawal info`, () => {
      account = new Account();
      transaction = new Transaction();
      const expected = [
        {
          amount: 500,
          balance: 500,
          date: `${transaction.date}`,
          type: "withdraw",
        },
      ];

      account.balance = 1000;

      account.withdraw(500);

      expect(account.transactions).toEqual(expect.arrayContaining(expected));
    });

    it(`Transactions contain deposit and withdrawal info`, () => {
      account = new Account();
      transaction = new Transaction();
      const expected = [
        {
          amount: 1000,
          balance: 1000,
          date: `${transaction.date}`,
          type: "deposit",
        },
        {
          amount: 800,
          balance: 200,
          date: `${transaction.date}`,
          type: "withdraw",
        },
      ];

      account.deposit(1000);
      account.withdraw(800);

      expect(account.transactions).toEqual(expect.arrayContaining(expected));
    });
  });

  describe("print statements", () => {
    it(`prints a statement including the deposit transactions`, () => {
      console.log = jest.fn();
      account = new Account();
      transaction = new Transaction();
      account.deposit(1000);
      account.printStatement();

      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance\n" +
          `${transaction.date} || 1000.00 || || 1000.00`
      );
    });

    it(`prints a statement including the withdraw transactions`, () => {
      console.log = jest.fn();
      account = new Account();
      transaction = new Transaction();
      account.balance = 1050;

      account.withdraw(1000);
      account.printStatement();

      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance\n" +
          `${transaction.date} || || 1000.00 || 50.00`
      );
    });
  });
});
