<!-- Install MongoDB locally (or use MongoDB Atlas). Create a new database named studentDB with a collection students. -->
Microsoft Windows [Version 10.0.26300.10075]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Pradeepto Dixit>mongosh
Current Mongosh Log ID: 6b0061bdf3f0bca2c0d12e57
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.14.2
Using MongoDB:          9.0.4
Using Mongosh:          2.14.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-11-20T11:14:03.387+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use studentDB
switched to db studentDB
studentDB> db.createCollection("students")
{ ok: 1 }
studentDB> show dbs
EmployeeDB  72.00 KiB
admin       40.00 KiB
config      72.00 KiB
local       64.00 KiB
mydbs       68.00 KiB
studentDB    8.00 KiB
studentDB> show collections
students
studentDB> db.getCollectionNames()
[ 'students' ]
studentDB> db
studentDB
studentDB> db.getCollectionNames()
[ 'students' ]
studentDB> db
studentDB
studentDB>