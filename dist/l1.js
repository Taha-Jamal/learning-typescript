"use strict";
class account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount > 0) {
            if (amount <= 0) {
                console.log("Deposit amount should be greater than zero");
                this.balance += amount;
            }
        }
    }
}
let Account = new account(1, 'Mosh', 0);
Account.deposite(100);
console.log(typeof account);
//# sourceMappingURL=l1.js.map