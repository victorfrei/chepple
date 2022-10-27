import Image from 'next/image'
import Footer from './footer/page'
import Header from './header/page'
import styles from './page.module.css'
import adventure from 'images/Monster.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">

        <h1 className={styles.title}>
          Bem vindo a <a href="/">Chepple!</a>
        </h1>
        <Link href='/auth'>
          <button className={styles.button}>Acessar</button>
          </Link>

         

<Image className="top-0 absolute object-cover -z-20 w-screen h-screen blur-sm" src={adventure} alt="adventure image"/>

     
    </div>
  )
}
