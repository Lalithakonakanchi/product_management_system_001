from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# PostgreSQL connection URL
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:2002@localhost:5432/products_db"

# Create the SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a session factory to manage database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# `Base` class that our ORM models will inherit from
Base = declarative_base()

# This is a dependency for the API to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
