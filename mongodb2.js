const {MongoClient} = require('mongodb');

const url = "mongodb+srv://Celina:qazplm@cluster0.mvphbd4.mongodb.net/test"

const client = new MongoClient(url)

async function run(){
    try {
        // connection created for url
       await client.connect(); 
       const db = client.db()

    //    const obj =[ {
    //     // for inserting one user data
    //     // name : "sahil",
    //     // age : "23",
    //     // address :"Mumbai"

    //     // for inserting multiple users data
    //     name : "John",
    //      age : "23",
    //      address :"Mumbai"
    //    },
    //    {
    //     name : "Andy",
    //      age : "20",
    //      address :"Goa"
    //    },
    //    {
    //     name : "Micheal",
    //      age : "21",
    //      address :"Delhi"
    //    }
    // ]

    // for creating own unique id
    const obj = [{
        _id: 11,
        name: "Manchester"
    },
{
    _id:22,
    name: "Jersey"
}]

    // for one user data
    //    const result = await db.collection('Collection').insertOne(obj)

    // for multiple users
    //    const result = await db.collection('Collection').insertMany(obj)

    // to access one user
    // in this first user data is access
    //    const result = await db.collection('Collection').findOne({})

    //    console.log("record inserted", result.insertedCount);

    // console.log(result);

    // if we want complete data to see we use toarray method
    // const result = await db.collection('Collection').find({}).toArray();

    const result = await db.collection('Collection').find({}, {projection: {_id:0, name:1}}).toArray();    
    console.log(result);
    // console.log(result.name);
    } catch (error) {
        console.log(error);
    }
    finally{
        client.close();
    }
}
run();