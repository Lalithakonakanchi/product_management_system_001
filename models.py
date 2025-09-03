from typing import Optional
from pydantic import BaseModel

# Base model with common fields for products
class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    quantity: int

# Model used for creating a new product via POST request
# It inherits from ProductBase and does NOT include the ID
class ProductCreate(ProductBase):
    pass


# All fields are optional, so you can update just one or all of them
class ProductUpdate(ProductBase):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None

# Model used for the API response, including the database-generated ID
class Product(ProductBase):
    id: int

    class Config:
        # Pydantic v2 uses `from_attributes` instead of `orm_mode`
        from_attributes = True
