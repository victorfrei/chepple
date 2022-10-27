import Image from 'next/image'
import styles from './page.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <a href='/'>Chepple</a>
          <div>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Cadastrar-se</button>
          </div>
        </div>
        </div>
  )
}
