import styles from './Button.module.css'
function Button ({text, handleOnClick, value, icon}) {

    function onClick(e) {
        e.preventDefault();
        if ( handleOnClick !== undefined )
            handleOnClick(value);
    }
    
    return (
            <button type='button' onClick={onClick} value={value} className={styles.btn}>{icon} {text}</button>
    )
}

export default Button