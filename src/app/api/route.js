import { NextResponse } from "next/server.js";
import clientPromise from "../db/conn.js";



export async function GET(req, res){
   

   try {
      const client = await clientPromise
      const db = await client.db('Movies')

      const collection = await db.collection('Horror')
      const data = await collection.find({}).toArray()

      return NextResponse.json(data)
      
   } catch (e){
      console.log(e);
   }
}
