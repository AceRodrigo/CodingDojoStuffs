class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposite(self, amount):
        self.account_balance+=amount
    def make_withdraw(self, amount):
        self.account_balance-=amount
    def display_user_balance(self):
        print (self.account_balance)
    def transfer(self,amount, accTwo):
        self.account_balance-=amount
        accTwo.account_balance+=amount

Tim=User("Tim","tim@live.com")
Tom=User("Tom","tom@live.com")
Phil=User("Phil","phil@live.com")


Tim.make_deposite(150)
Tim.make_deposite(200)
Tim.make_deposite(100)
Tim.make_deposite(300)
Tim.display_user_balance()

Tom.make_deposite(299)
Tom.make_deposite(766)
Tom.make_withdraw(50)
Tom.make_withdraw(60)
Tom.display_user_balance()

Phil.make_deposite(1000)
Phil.make_withdraw(100)
Phil.make_withdraw(250)
Phil.make_withdraw(100)
Phil.display_user_balance()


Tim.transfer(100,Tom)
Tom.display_user_balance()
