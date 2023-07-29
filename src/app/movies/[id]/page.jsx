import clientPromise from "@/app/db/conn"
import { ObjectId } from "mongodb";
import styleid from './id.module.css'

export const metadata = {
   title : 'Unkown | Movie'
}

export default async function Page({params}){
   const param = params.id
   const server = await clientPromise;
   const db = await server.db('Movies')
   const Collection = await db.collection('Horror')

   const query = {_id: new ObjectId(param)}

   const data = await Collection.findOne(query)


   return (
      <>
      <div className={styleid.main_body}>
         <div className={styleid.div1}>
            <img src={data.image} alt="" />
         </div>
         <div className={styleid.ads_div2}>
            <div className={styleid.ads_child}>
               <div className={styleid.grandchild1}>
                  <h2>{data.movie_name}</h2>
                  <br />
                  <br />
                  <p>{data.catlog}</p>
               </div>
               <div className={styleid.grandchild2}>
                  <img src={data.image} alt="" />
               </div>
            </div>
         </div>
      </div>
      </>
   )
}