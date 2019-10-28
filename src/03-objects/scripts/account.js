

export class Account {
    constructor(name, balance){
        this.name = name
        this.balance = balance;
    }

    withdraw(x) {
        this.balance = this.balance - x;
        return this.balance;
    }

    deposite(x) {
        this.balance = this.balance + x;
        return this.balance;
    }
    accountBalance(){
        return this.balance
    }
}