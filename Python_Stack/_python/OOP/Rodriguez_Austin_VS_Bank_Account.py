class BankAccount:
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if (self.balance<amount):
            self.balance-=5
            print("Insufficient funds: Charging a $5 fee, your new balance is ", self.balance)
        else:
            self.balance-=amount
        return self
    def display_account_info(self):
        print("Balance: ",self.balance, "Int Rate = ", self.int_rate)
        return self
    def yield_interest(self):
        x=self.balance*self.int_rate
        x+=self.balance
        print(x)
        return self

account1=BankAccount(0.07,1000)
account2=BankAccount(0.05,2000)


account1.deposit(100).deposit(200).deposit(1000).withdraw(50).yield_interest().display_account_info()

account2.deposit(50).deposit(500).withdraw(2000).withdraw(500).withdraw(5).withdraw(50).yield_interest().display_account_info()
