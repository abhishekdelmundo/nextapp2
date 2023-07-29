'use client'

import { AppMovies } from '@/app/movies/createContext'
import style from '../css/cards.module.css'
import { useContext } from 'react'
import Link from 'next/link'



export default function Cards(){
   const data = useContext(AppMovies);
   return (

      data.map((f)=> {

         const {movie_name, image, catlog, _id} = f

         
         return (
         <div key={`${_id}`}>
            <div className={style.cards}>
               <div>
                  <img src={image} alt={movie_name} />
               </div>
               <div className={style.cards_para}>
                  <Link href={`/movies/${_id}/?=${movie_name}`}><h3>{movie_name}</h3></Link>
                  <p>{catlog}</p>
               </div>
            </div>
         </div> 
         )
      })
     
   )
}