import Image from 'next/image'
import styles from '../styles/empresa.module.css';
import cocaCola from '../public/empresa/CocaColaEmpresa.jpg';
import historyCocaCola from '../public/empresa/historyCocaCola.jpg';
import pasion from '../public/empresa/pasion.jpg'; 
import comunidades from '../public/empresa/comunidades.jpg'; 
import cuidadoAgua from '../public/empresa/cuidadoAgua.jpg'; 
import sinResiduos from '../public/empresa/sinResiduos.jpg'; 
const Empresa = () => {
  return (
    <div>
        <Image
            loading = "lazy"
            src={cocaCola}
            alt="Coca Cola"
            width={1500}
            height = {650}
            
        />
        <div className = {styles.paragraph}>
            <p>En mayo de 1886, John Pemberton sirvió en Atlanta <strong>la primera Coca-Cola.</strong> Desde esa bebida icónica hasta hoy hemos recorrido un largo camino: el que nos llevó a convertirnos en una Compañía Integral de Bebidas. Somos Coca-Cola y mucho más…</p>
        </div>
        <div className={styles.history}>
            <div className={styles.textHistory}>
                <h2>En 1942</h2>
                <p>
                    la Compañía abrió su primera planta en Argentina. Desde entonces, el Sistema 
                    Coca-Cola -integrado por Coca-Cola y sus socios embotelladores- trabaja con la misma pasión y compromiso. 
                    <br></br>
                    <br></br>
                    Estamos presentes en el día a día de los bares históricos, de los quioscos de barrio, de las despensas de pueblo y hasta del cocacolero al que llamás en la cancha y en la playa. 
                    <br></br>
                    <br></br>
                    Gracias a todos ellos, podés disfrutar de nuestras bebidas en cada rincón del país.
                </p>
            </div>
            <div>
                <Image
                    loading = "lazy"
                    src={historyCocaCola}
                    alt='historyCocaCola'
                    width={800}
                    height = {500}
                />
            </div>
        </div>
        
        <div className={styles.history}>
            <div>
                <Image
                    loading = "lazy"
                    src={pasion}
                    alt='pasion'
                    width={800}
                    height = {500}
                />
            </div>
            <div className={styles.textPasion}>
                <h2>Nos apasiona trabajar por lo que las personas quieren</h2>
                <p>
                    Acompañamos cada momento de tu día con casi 80 opciones de bebidas. Desde la tradicional Coca-Cola, pasando por AdeS, Cepita, Powerade y muchas más. De todo nuestro portafolio, el 50% es bajo o sin calorías.
                </p>
            </div>
           
        </div>
        
        <div className={styles.history}>
            <div className={styles.textHistory}>
                <h2>Crecemos de la mano de nuestras comunidades</h2>
                <p>
                    Por cada empleo que generamos, ayudamos a crear muchos más en nuestra extensa cadena de valor que incluye, entre otros, agricultores,
                    choferes, operarios, clientes y recicladores.
                </p>
            </div>
            <div>
                <Image
                    loading = "lazy"
                    src={comunidades}
                    alt='comunidades'
                    width={800}
                    height = {500}
                />
            </div>
        </div>
        
        <div className={styles.history}>
            <div>
                <Image
                    loading = "lazy"
                    src={cuidadoAgua}
                    alt='cuidadoAgua'
                    width={800}
                    height = {500}
                />
            </div>
            <div className={styles.textPasion}>
                <h2>Estamos comprometidos con el cuidado del agua</h2>
                <p>
                    Desde 2015 reponemos a la naturaleza el equivalente al 100% del agua que usamos en la elaboración de nuestras bebidas.
                </p>
            </div>
           
        </div>
        
        <div className={styles.history}>
            <div className={styles.textHistory}>
                <h2>Creemos que vivir en Un Mundo sin Residuos es posible</h2>
                <p>
                    Trabajamos a nivel global para cumplir nuestro compromiso de recuperar y reciclar para  el 2030 un empaque por cada uno de los que ponemos en el mercado.
                </p>
            </div>
            <div>
                <Image
                    loading = "lazy"
                    src={sinResiduos}
                    alt='sinResiduos'
                    width={800}
                    height = {500}
                />
            </div>
        </div>
    </div>
  )
}

export default Empresa