from sqlalchemy import Column, Integer, String, Float
from database import Base

class RetailSales(Base):
    __tablename__ = "retail_sales"

    Transaction_ID = Column(Integer, primary_key=True)
    Date = Column(String(20))
    Gender = Column(String(20))
    Age = Column(Integer)
    Age_Group = Column(String(50))
    Product_Category = Column(String(100))
    Quantity = Column(Integer)
    Price_per_Unit = Column(Float)
    Total_Amount = Column(Float)