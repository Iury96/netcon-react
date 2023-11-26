import styles from '../styles/Tabela.module.css'

const Tabela = () => {
  return (
    <table className={styles.table}>
            <thead>
                <tr>
                    <th>Data da medição</th>
                    <th>Valor em Km</th>
                    <th>Valor em Anos-Luz</th>
                </tr>
            </thead>
        </table>
  )
}

export default Tabela