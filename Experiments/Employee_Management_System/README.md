Microsoft Windows [Version 10.0.26300.9974]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Pradeepto Dixit>mongosh
Current Mongosh Log ID: 6afe89ccc3918eeba9cf30d7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.2
Using MongoDB:          9.0.4
Using Mongosh:          2.14.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-14T17:16:54.909+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use EmployeeDB
switched to db EmployeeDB
EmployeeDB> db.createCollection("Employees")
{ ok: 1 }
EmployeeDB> db.Employees.insertMany([
|     {
|         EmpID: 101,
|         Name: "Rahul Sharma",
|         Department: "IT",
|         Designation: "Developer",
|         Salary: 55000,
|         Experience: 4,
|         City: "Delhi"
|     },
|     {
|         EmpID: 102,
|         Name: "Priya Verma",
|         Department: "HR",
|         Designation: "HR Manager",
|         Salary: 45000,
|         Experience: 5,
|         City: "Noida"
|     },
|     {
|         EmpID: 103,
|         Name: "Amit Kumar",
|         Department: "IT",
|         Designation: "Tester",
|         Salary: 35000,
|         Experience: 2,
|         City: "Ghaziabad"
|     },
|     {
|         EmpID: 104,
|         Name: "Neha Singh",
|         Department: "Finance",
|         Designation: "Accountant",
|         Salary: 42000,
|         Experience: 6,
|         City: "Lucknow"
|     },
|     {
|         EmpID: 105,
|         Name: "Arjun Gupta",
|         Department: "IT",
|         Designation: "Developer",
|         Salary: 60000,
|         Experience: 5,
|         City: "Gurugram"
|     }
| ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6afe89e9c3918eeba9cf30d8'),
    '1': ObjectId('6afe89e9c3918eeba9cf30d9'),
    '2': ObjectId('6afe89e9c3918eeba9cf30da'),
    '3': ObjectId('6afe89e9c3918eeba9cf30db'),
    '4': ObjectId('6afe89e9c3918eeba9cf30dc')
  }
}
EmployeeDB> db.Employees.find()
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d9'),
    EmpID: 102,
    Name: 'Priya Verma',
    Department: 'HR',
    Designation: 'HR Manager',
    Salary: 45000,
    Experience: 5,
    City: 'Noida'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30da'),
    EmpID: 103,
    Name: 'Amit Kumar',
    Department: 'IT',
    Designation: 'Tester',
    Salary: 35000,
    Experience: 2,
    City: 'Ghaziabad'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30db'),
    EmpID: 104,
    Name: 'Neha Singh',
    Department: 'Finance',
    Designation: 'Accountant',
    Salary: 42000,
    Experience: 6,
    City: 'Lucknow'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.find().pretty()
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d9'),
    EmpID: 102,
    Name: 'Priya Verma',
    Department: 'HR',
    Designation: 'HR Manager',
    Salary: 45000,
    Experience: 5,
    City: 'Noida'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30da'),
    EmpID: 103,
    Name: 'Amit Kumar',
    Department: 'IT',
    Designation: 'Tester',
    Salary: 35000,
    Experience: 2,
    City: 'Ghaziabad'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30db'),
    EmpID: 104,
    Name: 'Neha Singh',
    Department: 'Finance',
    Designation: 'Accountant',
    Salary: 42000,
    Experience: 6,
    City: 'Lucknow'
  },
  {
    _id:
    ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.find({ Department: "IT" })
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30da'),
    EmpID: 103,
    Name: 'Amit Kumar',
    Department: 'IT',
    Designation: 'Tester',
    Salary: 35000,
    Experience: 2,
    City: 'Ghaziabad'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.find({ Salary: { $gt: 40000 } })
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d9'),
    EmpID: 102,
    Name: 'Priya Verma',
    Department: 'HR',
    Designation: 'HR Manager',
    Salary: 45000,
    Experience: 5,
    City: 'Noida'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30db'),
    EmpID: 104,
    Name: 'Neha Singh',
    Department: 'Finance',
    Designation: 'Accountant',
    Salary: 42000,
    Experience: 6,
    City: 'Lucknow'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.find({ Experience: { $gt: 3 } })
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d9'),
    EmpID: 102,
    Name: 'Priya Verma',
    Department: 'HR',
    Designation: 'HR Manager',
    Salary: 45000,
    Experience: 5,
    City: 'Noida'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30db'),
    EmpID: 104,
    Name: 'Neha Singh',
    Department: 'Finance',
    Designation: 'Accountant',
    Salary: 42000,
    Experience: 6,
    City: 'Lucknow'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.find({ Designation: "Developer" })
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 55000,
    Experience: 4,
    City: 'Delhi'
  },
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30dc'),
    EmpID: 105,
    Name: 'Arjun Gupta',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 60000,
    Experience: 5,
    City: 'Gurugram'
  }
]
EmployeeDB> db.Employees.updateOne(
|     { EmpID: 101 },
|     { $set: { Salary: 65000 } }
| )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
EmployeeDB> db.Employees.find({ EmpID: 101 })
[
  {
    _id: ObjectId('6afe89e9c3918eeba9cf30d8'),
    EmpID: 101,
    Name: 'Rahul Sharma',
    Department: 'IT',
    Designation: 'Developer',
    Salary: 65000,
    Experience: 4,
    City: 'Delhi'
  }
]
EmployeeDB> db.Employees.deleteOne({ EmpID: 103 })
{ acknowledged: true, deletedCount: 1 }
EmployeeDB> db.Employees.find({ EmpID: 103 })

EmployeeDB> show dbs
EmployeeDB  40.00 KiB
admin       40.00 KiB
config      72.00 KiB
local       64.00 KiB
mydbs       68.00 KiB
EmployeeDB> show collections
Employees
EmployeeDB>