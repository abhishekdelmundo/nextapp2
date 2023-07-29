
import movie from '../components/css/movie.module.css'
import Cards from '../components/movies/cards'
import { AppMoviesProvider } from './createContext'

export const  metadata = {
   title : 'Horror Movies'
}

export default function Movies(){
   

   return (
      <div className={movie.main}>
         <div className={movie.movie_container}>
            <div>
               <h2>Horror Movies</h2>
               <div className={movie.cards_container}>
                  <AppMoviesProvider>
                     <Cards/>
                  </AppMoviesProvider>
                  
               </div>
            </div>
         </div>
      </div>
   )
}