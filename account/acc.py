class Account:

    def __init__(self, filepath):
        self.filepath = filepath
        with open(filepath, 'r') as file:
            self.balance = int(file.read())

    def withdraw(self, ammount):
        self.balance = self.balance - ammount

    def deposit(self, amount):
        self.balnce = self.balance+amount

    def commit(self):
        with open(self.filepath, 'w') as file:
            file.write(str(self.balance))


class Checking(Account):

    def __ini__(self, filepath, fee):
        self.fee = fee
        Account.__init__(self, filepath)

    def transfer(self, amount):
        self.balance = self.balance-amount-fee


checking = Checking(".\\balance.txt", 2)
checking.transfer(100)
print(checking.balance)
checking.commit()
