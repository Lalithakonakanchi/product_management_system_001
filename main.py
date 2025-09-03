from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, Base, get_db
from models import Product, ProductCreate, ProductUpdate
from database_models import Product as ProductModel


# Create tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def greet():
    return {"message": "Hello, World!"}

@app.get("/products", response_model=list[Product])
def get_all_products(db: Session = Depends(get_db)):
    return db.query(ProductModel).all()

@app.get("/products/{product_id}", response_model=Product)
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if product:
        return product
    return {"error": "Product not found"}

@app.post("/product", response_model=Product)
def add_product(product: ProductCreate, db: Session = Depends(get_db)):
    # Create the SQLAlchemy model instance from the Pydantic model data
    db_product = ProductModel(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@app.put("/product/{product_id}", response_model=Product)
def update_product(product_id: int, updated_product: ProductUpdate, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if not product:
        return {"error": "Product not found"}
    
    # Use model_dump(exclude_unset=True) to update only the provided fields
    update_data = updated_product.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(product, key, value)
        
    db.commit()
    db.refresh(product)
    return product

@app.delete("/product/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()
    if not product:
        return {"error": "Product not found"}
    db.delete(product)
    db.commit()
    return {"message": "Product deleted successfully"}
