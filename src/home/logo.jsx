import React from 'react';
import styles from './home.module.css'

function Logo() {
    return ( 
        <div className={styles.logoContainer}>
            <a className={styles.logoText} href="/#">bm</a>
        </div>
     );
}

export default Logo;