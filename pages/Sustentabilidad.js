import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/sustentabilidad.module.css';
import reciclar from '../public/sustentabilidad/reciclar.jpg';
import Image from 'next/image';

const Sustentabilidad = () => {
  return (
    <Layout>
      <video  autoPlay loop muted className={styles.video} loading="lazy">
        <source src='/inicio/body/paisaje.mp4#t=3' type="video/mp4"/>
      </video>
      <p className = {styles.title}>SUSTENTABILIDAD</p>
      <nav className={styles.navbar}>
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
    </Layout>
  )
}

export default Sustentabilidad