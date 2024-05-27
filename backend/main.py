from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import employee

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(employee.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Factored Employee Profile API"}
