'use client'
import Link from 'next/link'
import style from './css/footer.module.css'


export default function Footer(){
   return (
      <div className={style.footer}>
         <div className={style.footer_flex}>
            <div className={style.footer_ul}>
               <Link href="/faq"><li>FAQ</li></Link>
               <Link href="/investors"><li>Investors</li></Link>
               <Link href="/privacy"><li>Privacy</li></Link>
            </div>
            <div className={style.footer_ul}>
               <Link href="/legal_notice"><li>Legal notice</li></Link>
               <Link href="/careers"><li>Careers</li></Link>
               <Link href="/adsvertiser"><li>Advertisers</li></Link>
               <Link href="/cookies"><li>Cookies</li></Link>
            </div>
            <div className={style.footer_ul}>
               <Link href="/account"><li>Account</li></Link>
               <Link href="/coorporate_info"><li>Coorporate information</li></Link>
               <Link href="/privacy"><li>Privacy</li></Link>
            </div>
            <div className={style.footer_ul}>
               <Link href="/faq"><li>FAQ</li></Link>
               <Link href="/investors"><li>Investors</li></Link>
               <Link href="/privacy"><li>Privacy</li></Link>
            </div>
         </div>
         <span><p>Call +0002299780</p></span>
      </div>
   )
}