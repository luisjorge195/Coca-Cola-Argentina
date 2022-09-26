import Image from 'next/image'
import Link from 'next/link'
import imageFooter from '../public/inicio/footer/Coca-cola-footer.png'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return ( 
    <div className={styles.footer}>
        <div className={styles.content}>
            <Image
                width={350}
                height= {70}
                alt = 'footer-coca-cola'
                src={imageFooter}
                loading="lazy"
            />
            <p>2021 The Coca-Cola Company.Todos los derechos reservados</p>
        </div>
        <div className={styles.navbars}>
            <nav>
                <Link href='/'><a>NewsLetter<span>|</span></a></Link>
                <Link href='/'><a>Contacto<span>|</span></a></Link>
                <Link href='/'><a>Sala de Prensa<span>|</span></a></Link>
                <Link href='/'><a>Políticas</a></Link>
            </nav>
        </div>
    </div>
  )
}

export default Footer
