
import Image from 'next/image';
import Layout from '../components/Layout.js';
import ades from '../public/inicio/body/ades.jpg';
import agua from '../public/inicio/body/agua.jpg';
import lideres from '../public/inicio/body/lideres.jpg';
import murales from '../public/inicio/body/murales.jpg';
import testing from '../public/inicio/body/testing.jpg';
import CocaCola from '../public/inicio/body/CocaCola.jpg';
import reciclemos from '../public/inicio/body/reciclemos.png';
import reciclemos3 from '../public/inicio/body/reciclemos3.jpg';
import reciclemos4 from '../public/inicio/body/reciclemos4.jpg';
import styles from '../styles/principal.module.css';
export default function Home() {


  
  return (
    <Layout>
      <div className={styles.content}>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {730}
            loading = "lazy"
            src = {CocaCola}
            alt='CocaCola'
          />
          
          <p className= {styles.text}>
            80 años en Argentina sumando deseos y felicidad..
          </p>
          <button className= {styles.buttons}>
            <h4>ver Marcas</h4>
            <h4></h4>
          </button>
        </div>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {730}
            loading = "lazy"
            src = {agua}
            alt='agua'
          />
        
          <p className= {styles.text}>
            Día mundial del Agua:
            te invitamos a conocer los proyectos que desarrollamos en el país para cuidarla y garantizar su acceso.
          </p>
        </div>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {730}
            loading = "lazy"
            src = {testing}
            alt= 'testing'
            
          />
          <p className = {styles.text}>
            ProgramON Testing: 300 jóvenes podrán formarse de manera gratuita para entrar a la pujante industrial del software.
          </p>
        </div>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {730}
            loading = "lazy"
            alt='ades'
            src= {ades}
          />
          <p className = {styles.text}>
            Te contamos cómo es la nueva y disruptiva campaña de Ades para desterrar mitos.
          </p>
        </div>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {730}
            loading = "lazy"
            alt='lideres'
            src= {lideres}
          />
          <p className = {styles.text}>
            "Las mujeres lideramos desde la empatia y eso cambia el diálogo y el enfoque del negocio", dice la vicepresidenta de Operaciones de Coca-Cola para el Cono Sur.
          </p>
        </div>
        <div>
          <Image
            className={styles.image}
            width={1500}
            height = {750}
            loading = "lazy"
            alt='murales'
            src= {murales}
          />
          <p className = {styles.text}>
            "Murales que respiran", la iniciativa de Coca-Cola Argentina para sumar arte y sustentabilidad.
          </p>
        </div>
        <div className={styles.sectionFinal}>
            <div>
              <Image
                className={styles.image}
                width={500}
                height = {750}
                loading = "lazy"
                alt='reciclemos'
                src= {reciclemos}
              />
             
            </div>
            <div>
              <Image
                className={styles.image}
                width={500}
                height = {750}
                loading = "lazy"
                alt='reciclemos3'
                src= {reciclemos3}
              />
            </div>
            <div>
              <Image
                className={styles.image}
                width={500}
                height = {750}
                loading = "lazy"
                alt='reciclemos4'
                src= {reciclemos4}
              />
            </div>
        </div>
      </div>
     
    </Layout>
  )
}
