import AnosLuz from "./AnosLuz"
import styles from '../styles/Main.module.css'
import Kms from "./Kms"
import Tabela from "./Tabela"

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Conversor anos-luz/km</h1>
      <section>
        <AnosLuz />
        <Kms />
      </section>
      <Tabela />
    </main>
  )
}

export default Main