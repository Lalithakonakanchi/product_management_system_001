from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import session, engine, Base
from models import Product
import database_models  
from database_models import Product as ProductModel


# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get DB session
def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def greet():
    return {"message": "Hello, World!"}

@app.get("/products")
def get_all_products(db: Session = Depends(get_db)):
    return db.query(ProductModel).all()

@app.get("/products/{product_id}")
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if product:
        return product
    return {"error": "Product not found"}

@app.post("/product")
def add_product(product: Product, db: Session = Depends(get_db)):
    db_product = ProductModel(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return {"message": "Product added successfully", "product": db_product}

@app.put("/product/{product_id}")
def update_product(product_id: int, updated_product: Product, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if not product:
        return {"error": "Product not found"}
    for key, value in updated_product.dict().items():
        setattr(product, key, value)
    db.commit()
    db.refresh(product)
    return {"message": "Product updated successfully", "product": product}

@app.delete("/product/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if not product:
        return {"error": "Product not found"}
    db.delete(product)
    db.commit()
    return {"message": "Product deleted successfully"}
