import styles from './Info.module.css';
function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <h2>Heading in the Info component</h2>
            <button>Click me in the Info component</button>
        </div>
    );
}

export default Info;
