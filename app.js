const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'proj-1'

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('error has occured')
    }
    console.log('all perf')

    const db = res1.db(dbname)


    db.collection('users').insertOne({
        name: "tony",
        age: 25 
    }, (error, data) => {
        if (error) {
            console.log("unable to insert data")
        } console.log(data.insertedId)
    })


    db.collection('users').insertOne({
        name: "ahmed",
        age: 24 
    }, (error, data) => {
        if (error) {
            console.log("unable to insert data")
        } console.log(data.insertedId)
    })



    db.collection('users').insertMany([{
        name: 'adel',
        age: 22 
    },
    {
        name: 'kero',
        age: 24 
    },
    {
        name: 'jhon',
        age: 23
    },
    {
        name: 'fady',
        age: 25
    },
    {
        name: 'filo',
        age: 28
    },
    {
        name: 'ibrahim',
        age: 27
    },
    {
        name: 'zizo',
        age: 27
    },
    {
        name: 'bishoy',
        age: 27
    },
    {
        name: 'mina',
        age: 27
    },
    {
        name: 'shady',
        age: 27
    }
    ], (error, data) => {
        if (error) {
            console.log('unable to isert data')
        } console.log(data.insertedCount)
    })


    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            return console.log('Error has occurred')
        }
        console.log(users)
    })

    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log('Error has occurred')
        }
        console.log(users)
    })


    db.collection("users").updateOne({_id:mongodb.ObjectId('66b3221950b8ed42baef3e1c')},{
        $set : {name : 'islam' } , 
        $inc : {age : 5 } , 
    }).then((data)=>{
        console.log(data.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection("users").updateOne({_id:mongodb.ObjectId('66b3221950b8ed42baef3e1d')},{
        $set : {name : 'islam' } , 
        $inc : {age : 5 } , 
    }).then((data)=>{
        console.log(data.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection("users").updateOne({_id:mongodb.ObjectId('66b3221950b8ed42baef3e1e')},{
        $set : {name : 'islam' } , 
        $inc : {age : 5 } ,  
    }).then((data)=>{
        console.log(data.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection("users").updateOne({_id:mongodb.ObjectId('66b3221950b8ed42baef3e1f')},{
        $set : {name : 'islam' } , 
        $inc : {age : 5 } ,   
    }).then((data)=>{
        console.log(data.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })






    db.collection("users").updateOne({_id:mongodb.ObjectId('66b3221950b8ed42baef3e1c')},{
        $inc : {age : 5 } , 
    }).then((data)=>{
        console.log(data.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })


    db.collection('users').updateMany({} , {
        $inc : {age : 10}
    }).then((data)=>{
            console.log(data.modifiedCount)
        }).catch((error)=>{
            console.log(error)
        })




    db.collection('users').deleteMany({age : 41 })
    .then((data)=>{console.log (data.deletedCount)})
    .catch((error)=>{
        console.log(error)
    })


})