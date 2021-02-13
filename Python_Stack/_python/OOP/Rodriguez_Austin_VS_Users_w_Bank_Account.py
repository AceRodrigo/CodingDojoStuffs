from Rodriguez_Austin_VS_Bank_Account import BankAccount


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0, balance=0)

    def deposite(self):
        self.account .deposit()
        return self

    def withdraw(self):
        self.account.withdraw()
        return self

    def display_account_info(self):
        return self

    def transfer(self, accTwo):
        self.account .withdaw()
        accTwo.account .deposit()


Tim = User("Tim", "tim@live.com")
BankAccount=("account1", "account2")


