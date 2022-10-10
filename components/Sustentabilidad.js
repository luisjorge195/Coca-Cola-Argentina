import Link from 'next/link';
import {useState, useEffect} from 'react'
import styles from '../styles/sustentabilidad.module.css';
import reciclar from '../public/sustentabilidad/reciclar.jpg';
import comunidades from '../public/sustentabilidad/comunidades.jpg'
import paisaje from '../public/sustentabilidad/paisaje.jpg'
import agua from '../public/sustentabilidad/agua.jpg'
import Image from 'next/image';

const Sustentabilidad = () => {
    const[scroll, setScroll] = useState('');
  const eventScroll = ()=>{
      setScroll(window.scrollY);
  }
    useEffect(() => {
        window.addEventListener('scroll', eventScroll);
        return () => {
            window.removeEventListener('scroll', eventScroll);
        }
    }
        , [])
  return (
    <div>
        <video  autoPlay loop muted className={styles.video} loading="lazy">
        <source src='/inicio/body/paisaje.mp4#t=3' type="video/mp4"/>
      </video>
      <p className = {styles.title}>SUSTENTABILIDAD</p>
      <nav className={scroll>400 ? styles.navbarFixed : styles.navbar}>
        <Link href='/'><a><span>Sustentabilidad</span></a></Link>
        <Link href='/'><a><span>Un mundo sin residuos</span></a></Link>
        <Link href='/'><a><span>Cuidado del Agua</span></a></Link>
        <Link href='/'><a><span>Nuestras Comunidades</span></a></Link>
        <Link href='/'><a><span>100% Innovación</span></a></Link>
      </nav>
      <div className = {styles.paragraph}>
        <p>
          Nuestro crecimiento es importante, pero no de cualquier manera. La gente importa. Nuestro planeta importa. Hacemos negocios de la manera correcta, siguiendo nuestros valores y trabajando para encontrar caminos que nos beneficien a todos.
        </p>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.texts}>
          <h3>Junto con + de 200 compañias y organizaciones,</h3>
          <p>Formamos parte del Acuerdo Global de la Nueva Economia del Plástico para recuperar los residuos de envases y transformarlos en un recurso de alto valor que contribuya con las economías locales</p>
        </div>
        <div>
          <Image
            src= {reciclar}
            width= {1000} 
            height = {500}
            loading = "lazy"
            alt='reciclar'
          />
        </div>
      </div>
      <div className={styles.comunidades}>
        <div>
          <Image
            src= {comunidades}
            width= {1000} 
            height = {600}
            loading = "lazy"
            alt='comunidades'
          />
        </div>
        <div className={styles.textComunity}>
          <h3>Contribuimos a fortalecer nuestras comunidades,</h3>
          <p>6 Millones de mujeres en 75 países ya participaron de nuestros programas de capacitación y mentorías</p>
        </div>  
      </div>
      <div className={styles.contentNatural}>
        <div className={styles.textNatural}>
          <h3>$1000 millones U.S donados,</h3>
          <p>por la fundación Coca-Cola en proyectos alrededor del mundo.</p>
        </div>
        <div>
          <Image
            src= {paisaje}
            width= {1000} 
            height = {550}
            loading = "lazy"
            alt='paisaje'
          />
        </div>
      </div>
      <div className={styles.contentWater}>
        <div className={styles.waterImage}>
          <Image
            src= {agua}
            width= {900} 
            height = {550}
            loading = "lazy"
            alt='agua'
          />
        </div>
        <div className={styles.textWater}>
          <h3>Más del 100% del agua,</h3>
          <p>que empleamos en nuestras bebidas regresa a la naturaleza.</p>
        </div>
      </div>
    </div>
  )
}

export default Sustentabilidad