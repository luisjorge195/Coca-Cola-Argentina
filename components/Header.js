import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ImageHeader from '../public/inicio/header/Coca-cola.jpg'
import styles from '../styles/header.module.css'

const Header = () => {
   const [highScroll, sethighScroll] = useState(0);
   const handleScroll = () => {
    sethighScroll(window.scrollY)
   }
   useEffect(()=>{
    window.addEventListener("scroll",handleScroll )
   },["scroll"])
  return (
    <div className = { highScroll>45 ? styles.prueba : styles.header } >
      <div>
        <Link href ='/'>
          <Image
            width = {highScroll>45 ? 150 : 250}
            height = {highScroll>45 ? 55 : 75}
            alt = 'coca-cola-header'
            src = { ImageHeader }
            loading="lazy"
          />
        </Link>
      </div>
      <div className = {styles.navegacion}>
        <nav>
          <Link  href = "/Empresa"><a className= {styles.links}><span>Nuestra Compañia</span></a></Link>
          <Link  href = '/Marcas'><a className= {styles.links}><span>Marcas</span></a></Link>
          <Link  href = '/Sustentabilidad'><a className = { styles.links }><span>Sustentabilidad</span></a></Link>
          <Link  href = '/Novedades'><a className = { styles.links }><span>Novedades</span></a></Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
