import styles from '../styles/Kms.module.css'

const Kms = () => {
    return (

        <form className={styles.cards}>
            <label for="kms">Kms:</label>
            <input type="number" id="kms" />
            <input type="button" value="Converter" id="converterKms" />
            <div class="result1"></div>
        </form>

    );
};

export default Kms