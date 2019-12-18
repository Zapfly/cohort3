import { Account, AccountController, addAccount } from './account-react';

const testAccount = new Account("Test Account", 0);

beforeEach(() => {
    testAccount.startingBalance = 0;
});

test('test Account deposit', () => {
    expect(testAccount.accountDeposit(1)).toEqual(1);
    expect(testAccount.accountDeposit(10)).toEqual(11);
    expect(testAccount.accountDeposit(101)).toEqual(112);
});

test('test Account withdraw', () => {
    testAccount.startingBalance = 25;
    expect(testAccount.accountWithdraw(0)).toEqual(25);
    expect(testAccount.accountWithdraw(5)).toEqual(20);
    expect(testAccount.accountWithdraw(17)).toEqual(3);
});

test('test Account balance', () => {
    expect(testAccount.accountBalance()).toEqual(0);
    testAccount.startingBalance = 15;
    expect(testAccount.accountBalance()).toEqual(15);
    testAccount.startingBalance = -7;
    expect(testAccount.accountBalance()).toEqual(-7);
});


test('test Account Controller add new account', () => {
    const testAccountController = new AccountController("Sarah");
    
    expect(testAccountController)
        .toEqual({"listArray": [], "listName": "Sarah"});
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray)
        .toEqual([{"accountName": "checking", "startingBalance": 50}]);
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray)
        .toEqual(
            [{"accountName": "checking", "startingBalance": 50},
            {"accountName": "checking", "startingBalance": 50}]);
    
});