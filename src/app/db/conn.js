const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL
const options = {}


let client;
let clientPromise;

if(!process.env.MONGO_URL){
   console.log('Please add MongoDB URL');
}

if(process.env.NODE_ENV === 'development'){
   if(!global._mongoClientPromise){
      client = new MongoClient(url, options)
      global._mongoClientPromise = client.connect()
      console.log('connected succesfully');
   }

   clientPromise = global._mongoClientPromise
} else {
   client = new MongoClient(url, options)
   clientPromise = client.connect()
   console.log('connected succesfully');
}

export default clientPromise