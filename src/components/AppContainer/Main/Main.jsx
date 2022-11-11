import styles from './Main.module.scss';

const Main = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>To search for a user, enter his name</h1>
            </div>
        </div>
    )
}

export default Main;