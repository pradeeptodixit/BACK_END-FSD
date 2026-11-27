<!-- Perform the following on studentDB.students collection: Insert 5 student records. Find all students older than 20. Update a student's age using $set. Delete one student. -->
Microsoft Windows [Version 10.0.26300.10075]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Pradeepto Dixit>mongosh
Current Mongosh Log ID: 6b006b843e78f0161722e316
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.2
Using MongoDB:          9.0.4
Using Mongosh:          2.14.2
mongosh 2.14.3 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-20T11:14:03.387+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use studentDB
switched to db studentDB
studentDB> show collections
students
studentDB> db.students.insertMany([
|     {
|         rollNo: 101,
|         name: "Aman",
|         age: 19,
|         course: "B.Tech",
|         city: "Delhi"
|     },
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 21,
|         course: "BCA",
|         city: "Noida"
|     },
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 22,
|         course: "B.Tech",
|         city: "Ghaziabad"
|     },
|     {
|         rollNo: 104,
|         name: "Neha",
|         age: 20,
|         course: "MCA",
|         city: "Lucknow"
|     },
|     {
|         rollNo: 105,
|         name: "Karan",
|         age: 23,
|         course: "BBA",
|         city: "Kanpur"
|     }
| ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6b006ba53e78f0161722e317'),
    '1': ObjectId('6b006ba53e78f0161722e318'),
    '2': ObjectId('6b006ba53e78f0161722e319'),
    '3': ObjectId('6b006ba53e78f0161722e31a'),
    '4': ObjectId('6b006ba53e78f0161722e31b')
  }
}
studentDB> db.students.find()
[
  {
    _id: ObjectId('6b006ba53e78f0161722e317'),
    rollNo: 101,
    name: 'Aman',
    age: 19,
    course: 'B.Tech',
    city: 'Delhi'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e318'),
    rollNo: 102,
    name: 'Rahul',
    age: 21,
    course: 'BCA',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e319'),
    rollNo: 103,
    name: 'Priya',
    age: 22,
    course: 'B.Tech',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31a'),
    rollNo: 104,
    name: 'Neha',
    age: 20,
    course: 'MCA',
    city: 'Lucknow'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31b'),
    rollNo: 105,
    name: 'Karan',
    age: 23,
    course: 'BBA',
    city: 'Kanpur'
  }
]
studentDB> db.students.find().pretty()
[
  {
    _id: ObjectId('6b006ba53e78f0161722e317'),
    rollNo: 101,
    name: 'Aman',
    age: 19,
    course: 'B.Tech',
    city: 'Delhi'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e318'),
    rollNo: 102,
    name: 'Rahul',
    age: 21,
    course: 'BCA',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e319'),
    rollNo: 103,
    name: 'Priya',
    age: 22,
    course: 'B.Tech',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31a'),
    rollNo: 104,
    name: 'Neha',
    age: 20,
    course: 'MCA',
    city: 'Lucknow'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31b'),
    rollNo: 105,
    name: 'Karan',
    age: 23,
    course: 'BBA',
    city: 'Kanpur'
  }
]
studentDB> db.students.find({ age: { $gt: 20 } })
[
  {
    _id: ObjectId('6b006ba53e78f0161722e318'),
    rollNo: 102,
    name: 'Rahul',
    age: 21,
    course: 'BCA',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e319'),
    rollNo: 103,
    name: 'Priya',
    age: 22,
    course: 'B.Tech',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31b'),
    rollNo: 105,
    name: 'Karan',
    age: 23,
    course: 'BBA',
    city: 'Kanpur'
  }
]
studentDB> db.students.find({ age: { $gt: 20 } }).pretty()
[
  {
    _id: ObjectId('6b006ba53e78f0161722e318'),
    rollNo: 102,
    name: 'Rahul',
    age: 21,
    course: 'BCA',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e319'),
    rollNo: 103,
    name: 'Priya',
    age: 22,
    course: 'B.Tech',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31b'),
    rollNo: 105,
    name: 'Karan',
    age: 23,
    course: 'BBA',
    city: 'Kanpur'
  }
]
studentDB> db.students.updateOne(
|     { rollNo: 102 },
|     { $set: { age: 24 } }
| )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
studentDB> db.students.findOne({ rollNo: 102 })
{
  _id: ObjectId('6b006ba53e78f0161722e318'),
  rollNo: 102,
  name: 'Rahul',
  age: 24,
  course: 'BCA',
  city: 'Noida'
}
studentDB> db.students.deleteOne({ rollNo: 101 })
{ acknowledged: true, deletedCount: 1 }
studentDB> db.students.find().pretty()
[
  {
    _id: ObjectId('6b006ba53e78f0161722e318'),
    rollNo: 102,
    name: 'Rahul',
    age: 24,
    course: 'BCA',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e319'),
    rollNo: 103,
    name: 'Priya',
    age: 22,
    course: 'B.Tech',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31a'),
    rollNo: 104,
    name: 'Neha',
    age: 20,
    course: 'MCA',
    city: 'Lucknow'
  },
  {
    _id: ObjectId('6b006ba53e78f0161722e31b'),
    rollNo: 105,
    name: 'Karan',
    age: 23,
    course: 'BBA',
    city: 'Kanpur'
  }
]
studentDB> db.students.countDocuments()
4
studentDB>