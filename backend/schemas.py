from pydantic import BaseModel
from typing import List

class EmployeeBase(BaseModel):
    name: str
    position: str
    skills: List[str]

class EmployeeCreate(EmployeeBase):
    pass

class Employee(EmployeeBase):
    id: int

    class Config:
        orm_mode = True
