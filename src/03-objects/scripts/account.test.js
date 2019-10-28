import {Account} from './account.js'

const chequingAccount = new Account("Chequing Account", 1000);

test('Account Balance', () => {
    expect(chequingAccount.name).toEqual("Chequing Account");
    expect(chequingAccount.balance).toEqual(1000);
})

test('Account Withdrawal', () => {
    expect(chequingAccount.balance).toEqual(1000);

    chequingAccount.withdraw(10);
    expect(chequingAccount.balance).toEqual(990);
})

test('Account Deposit', () => {
    expect(chequingAccount.accountBalance()).toEqual(990);

    chequingAccount.deposite(5);
    expect(chequingAccount.balance).toEqual(995);
})


