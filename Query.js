

use("databasename")
//Create a new collection
db.createCollection("CollectionName")

// Removes a collection from the database.

db.collectionName.drop()

//Inserts a single document into a collection.
db.collectionName.insert({
    name : "ishan",
    roll : 500510,
    dept : "cse"
})

//Delete/remove a single document from the collection.

db.collectionName.deleteOne({
    
})