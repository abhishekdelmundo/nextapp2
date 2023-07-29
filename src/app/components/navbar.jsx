'use client'
import Link from 'next/link'
import navbar from './css/Navbar.module.css'


export default function Navbar(){
   return (
      <nav className={navbar.nav}>
         <div className={navbar.div1}>
            <img src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" alt="" />
            <ul className={navbar.nav_ul}>
               <Link href="/Blog"><li>Blog</li></Link>
               <Link href="/about"><li>About</li></Link>
               <Link href="/contact"><li>Contact</li></Link>
               <Link href="/movies/"><li>Movies</li></Link>
            </ul>
         </div>
      </nav>
   )
}