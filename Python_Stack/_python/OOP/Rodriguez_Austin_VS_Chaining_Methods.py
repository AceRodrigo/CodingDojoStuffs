class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposite(self, amount):
        self.account_balance += amount
        return self
    def make_withdraw(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(self.account_balance)
        return self
    def transfer(self, amount, accTwo):
        self.account_balance -= amount
        accTwo.account_balance += amount
        return self

Tim = User("Tim", "tim@live.com")
Tom = User("Tom", "tom@live.com")
Phil = User("Phil", "phil@live.com")

Tim.make_deposite(150).make_deposite(200).make_deposite(100).make_deposite(300).display_user_balance()

Tom.make_deposite(299).make_deposite(766).make_withdraw(50).make_withdraw(60).display_user_balance()

Phil.make_deposite(1000).make_withdraw(100).make_withdraw(250).make_withdraw(100).display_user_balance()

Tim.transfer(100, Tom)
Tom.display_user_balance()

