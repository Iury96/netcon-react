import styles from '../styles/Header.module.css'
import login from '../img/login.jpg'

const Header = () => {
    return (
        <>
            <div className="container">
                <header className={styles.header}>
                    <nav className="navbar">
                        <button>Login</button>
                        <img className='login' src={login} alt="Login"/>
                    </nav>
                </header>
                <aside>
                    <a href="#">Início</a>
                    <a href="#">Informações</a>
                </aside>
            </div>
        </>
    )
}

export default Header