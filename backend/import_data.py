import pandas as pd
from database import engine

file_path = r"D:\GlobalRetailAnalytics\backend\superstore.csv"

df = pd.read_csv(file_path)

print("✅ Superstore data loaded")
print("Rows:", len(df))
print("Columns:", len(df.columns))

df.to_sql("global_sales",
con=engine, if_exists="replace", 
index=False)


print("✅ Global data imported into database!")