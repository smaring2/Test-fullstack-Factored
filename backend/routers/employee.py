from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, database

router = APIRouter(
    prefix="/employees",
    tags=["employees"]
)

@router.post("/", response_model=schemas.Employee)
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(database.SessionLocal)):
    db_employee = models.Employee(**employee.dict())
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

@router.get("/{employee_id}", response_model=schemas.Employee)
def read_employee(employee_id: int, db: Session = Depends(database.SessionLocal)):
    db_employee = db.query(models.Employee).filter(models.Employee.id == employee_id).first()
    if db_employee is None:
        raise HTTPException(status_code=404, detail="Employee not found")
    return db_employee
