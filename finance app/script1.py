from pandas_datareader import data
import datetime

start = datetime.datetime(2020, 3, 1)
end = datetime.datetime(2020, 3, 11)

df = data.DataReader(name="AAPL", data_source="yahoo", start=start, end=end)

print(df)
