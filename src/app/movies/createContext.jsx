'use client'

const { createContext } = require("react");

export const AppMovies = createContext()

export async function AppMoviesProvider({children}){
   
   const FetchData = await fetch('http://localhost:3000/api/', {cache : 'no-store'})
   const data = await FetchData.json()
   return <AppMovies.Provider value={data}>{children}</AppMovies.Provider>
}

