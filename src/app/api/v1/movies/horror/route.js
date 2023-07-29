import clientPromise from "@/app/db/conn";

const { ObjectId } = require("mongodb");
const { NextResponse } = require("next/server");


export async function GET(req, res){
   try {
      
      const client = await clientPromise

      const db = await client.db('Movies')
      const collection = await db.collection('Horror')
      const query = {_id : new ObjectId(req.params)}
      const data = await collection.findOne(query)

      return NextResponse.json(data)

   } catch (e) {
      console.log(e)
   }
}
