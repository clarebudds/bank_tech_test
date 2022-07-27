const Transaction = require("./transaction");

describe("Transaction", () => {
  it("prints out the current date", () => {
    let transaction = new Transaction("deposit", 1000, 1000);
    console.log(transaction.date);
    expect(transaction.date).toEqual(transaction.currentDate());
  });

  describe("deposits", () => {
    let transaction;

    beforeEach(() => {
      transaction = new Transaction("deposit", 2000, 2000, "27/07/2022");
    });

    it("records the type of the transaction", () => {
      expect(transaction.type).toBe("deposit");
    });

    it("records the amount of the transaction", () => {
      expect(transaction.amount).toBe(2000);
    });

    it("records the balance of the transaction", () => {
      expect(transaction.balance).toBe(2000);
    });

    it("records the date of the transaction", () => {
      expect(transaction.date).toBe("27/07/2022");
    });
  });

  describe("withdrawals", () => {
    let transaction;

    beforeEach(() => {
      transaction = new Transaction("withdraw", 500, 2500, "27/07/2022");
    });

    it("records the type of the transaction", () => {
      expect(transaction.type).toBe("withdraw");
    });

    it("records the amount of the transaction", () => {
      expect(transaction.amount).toBe(500);
    });

    it("records the balance of the transaction", () => {
      expect(transaction.balance).toBe(2500);
    });

    it("records the date of the transaction", () => {
      expect(transaction.date).toBe("27/07/2022");
    });
  });
});
