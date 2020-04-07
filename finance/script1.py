import pandas as pd
import numpy as np
import yfinance as yf
import datetime as dt
from pandas.datareader import data as pdr

yf.pdr_override()

stock = input("Enter a stock ticker symbol: ")
print(stock)

startyear = 2019
startmonth = 1
startday = 1

start = dt.datetime(startyear, startmonth, startday)

now = dt.datetime.now()

df.pdr.get_data_yahoo(stock, start, now)
print(df.tail())


# moving avg (days)
ma = 50
smaString = "Sma_"+str(ma)

df[smaString] = df.iloc[:, 4].rolling(window=ma).mean()

df = df.iloc[ma:]

for i in df.index:
    if (df.["Adj Close"][i] > df[smaString][i]):
        print("The close is higher")
        numH += 1
    else:
        print("the close is lower")
        numL += 1
