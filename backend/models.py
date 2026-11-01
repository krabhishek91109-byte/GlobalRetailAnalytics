from sqlalchemy import Column, Integer, String, Float
from database import Base


class RetailSales(Base):
    __tablename__ = "global_sales"

    Row_ID = Column("Row.ID", Integer, primary_key=True)
    Category = Column("Category", String(100))
    City = Column("City", String(100))
    Country = Column("Country", String(100))
    Customer_ID = Column("Customer.ID", String(100))
    Customer_Name = Column("Customer.Name", String(150))
    Discount = Column("Discount", Float)
    Market = Column("Market", String(100))
    Order_Date = Column("Order.Date", String(50))
    Order_ID = Column("Order.ID", String(100))
    Order_Priority = Column("Order.Priority", String(50))
    Product_ID = Column("Product.ID", String(100))
    Product_Name = Column("Product.Name", String(200))
    Profit = Column("Profit", Float)
    Quantity = Column("Quantity", Integer)
    Region = Column("Region", String(100))
    Sales = Column("Sales", Float)
    Segment = Column("Segment", String(100))
    Ship_Date = Column("Ship.Date", String(50))
    Ship_Mode = Column("Ship.Mode", String(100))
    Shipping_Cost = Column("Shipping.Cost", Float)
    State = Column("State", String(100))
    Sub_Category = Column("Sub.Category", String(100))
    Year = Column("Year", Integer)
    Market2 = Column("Market2", String(100))