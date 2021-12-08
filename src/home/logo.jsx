import React from 'react';
import styles from './home.module.css'

function Logo() {
    return ( 
        <div className={styles.logoContainer}>
            <h1 className={styles.logoText}>bm</h1>
        </div>
     );
}

export default Logo;