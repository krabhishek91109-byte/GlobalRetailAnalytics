from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func, distinct
from database import engine, Base, SessionLocal
import models

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Global Retail Analytics API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Global Retail Analytics Backend Running",
        "status": "success"
    }


@app.get("/test-db")
def test_db():
    try:
        with engine.connect():
            return {"message": "Database Connected Successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Database connection failed: {str(e)}"
        )


@app.get("/sales")
def get_sales(
    skip: int = 0,
    limit: int = 1000,
    db: Session = Depends(get_db)
):
    limit = min(max(limit, 1), 5000)
    skip = max(skip, 0)

    try:
        data = (
            db.query(models.RetailSales)
            .offset(skip)
            .limit(limit)
            .all()
        )
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/dashboard-data")
def get_dashboard_data(db: Session = Depends(get_db)):
    try:
        total_quantity = (
            db.query(func.coalesce(func.sum(models.RetailSales.Quantity), 0))
            .scalar()
        )

        total_revenue = (
            db.query(func.coalesce(func.sum(models.RetailSales.Sales), 0))
            .scalar()
        )

        total_orders = (
            db.query(func.count(distinct(models.RetailSales.Order_ID)))
            .scalar()
        )

        total_customers = (
            db.query(func.count(distinct(models.RetailSales.Customer_ID)))
            .scalar()
        )

        monthly_results = (
            db.query(
                models.RetailSales.Year,
                func.sum(models.RetailSales.Sales).label("sales")
            )
            .group_by(models.RetailSales.Year)
            .order_by(models.RetailSales.Year)
            .all()
        )

        monthly_sales = [
            {
                "month": str(year),
                "sales": float(sales or 0)
            }
            for year, sales in monthly_results
        ]

        return {
            "total_quantity": int(total_quantity or 0),
            "total_revenue": float(total_revenue or 0),
            "total_orders": int(total_orders or 0),
            "total_customers": int(total_customers or 0),
            "monthly_sales": monthly_sales
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Dashboard data error: {str(e)}"
        )
@app.get("/country-sales")
def get_country_sales(db: Session = Depends(get_db)):
    try:
        results = (
            db.query(
                models.RetailSales.Country,
                func.sum(models.RetailSales.Sales).label("revenue"),
                func.count(
                    distinct(models.RetailSales.Order_ID)
                ).label("orders"),
                func.sum(models.RetailSales.Profit).label("profit"),
            )
            .group_by(models.RetailSales.Country)
            .order_by(func.sum(models.RetailSales.Sales).desc())
            .all()
        )

        return [
            {
                "country": country,
                "revenue": round(float(revenue or 0), 2),
                "orders": int(orders or 0),
                "profit": round(float(profit or 0), 2),
            }
            for country, revenue, orders, profit in results
        ]

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Country sales error: {str(e)}"
        )