import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("mysql+pymysql://root:password91109%40@localhost:3306/global_retail")

df = pd.read_csv(r"D:\GlobalRetailAnalytics\backend\Retail_Sales_Data.csv")
df = df.rename(columns={
    "Transaction ID": "Transaction_ID",
    "Age Group": "Age_Group",
    "Product Category": "Product_Category",
    "Price per Unit": "Price_per_Unit",
    "Total Amount": "Total_Amount"
})

df = df[[
    "Transaction_ID",
    "Date",
    "Gender",
    "Age",
    "Age_Group",
    "Product_Category",
    "Quantity",
    "Price_per_Unit",
    "Total_Amount"
]]

df.to_sql("retail_sales", con=engine, if_exists="append", index=False)

print("Data Imported Successfully!")