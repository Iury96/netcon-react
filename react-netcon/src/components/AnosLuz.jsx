import styles from '../styles/AnosLuz.module.css'
const AnosLuz = () => {


    return (

        <form className={styles.cards}>
            <label for="anos">Anos luz:</label>
            <input type="number" id="anos" />
            <input type="button" value="Converter" id="converterAnosLuz" />
            <div class="result1"> </div>
        </form>

    );
};

export default AnosLuz;