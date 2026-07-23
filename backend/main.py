from fastapi import FastAPI
from database import engine, Base
from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal
from fastapi.middleware.cors import CORSMiddleware
import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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
        "message": "Global Retail Analytics Backend Running 🚀"
    }
@app.get("/test-db")
def test_db():
    try:
        connection = engine.connect()
        connection.close()
        return {"message": "Database Connected Successfully ✅"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/sales")
def get_sales(db: Session = Depends(get_db)):
    data = db.query(models.RetailSales).all()
    return data