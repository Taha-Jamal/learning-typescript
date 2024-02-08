"use strict";
class MyAccount {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount > 0) {
            console.log("Deposit amount should be greater than zero");
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this._balance = value;
    }
}
let newAccount = new MyAccount(1, 'Mosh', 0);
newAccount.deposite(100);
console.log(newAccount.balance);
console.log(newAccount instanceof MyAccount);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'mosh';
seats.A2 = 'taha';
class ride {
    start() { ride._activerides++; }
    stop() { ride._activerides--; }
    static get activerides() {
        return ride._activerides;
    }
}
ride._activerides = 0;
let ride1 = new ride();
ride1.start();
let ride2 = new ride();
ride2.start();
console.log(ride.activerides);
class person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    get fullname() {
        return this.fname + '' + this.lname;
    }
    walk() {
        console.log('walking');
    }
}
class student extends person {
    constructor(studentid, fname, lname) {
        super(fname, lname);
        this.studentid = studentid;
        this.fname = fname;
        this.lname = lname;
    }
    taketest() {
        console.log('taking test');
    }
}
let s1 = new student(1, 'j', 'sdasd');
class aa {
    constructor(name) {
        this.name = name;
    }
    addevent() {
        throw new Error("Method not implemented.");
    }
    removeevent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=index.js.map