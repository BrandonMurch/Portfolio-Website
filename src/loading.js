import React from 'react';

import style from './loading.module.css';

const Loading = function CreateLoadingScreen({ size }) {

    return (
        <div
            className={style.ring}
            role="presentation"
            aria-label="loading"
        > 
            <div className={style.spinningContainer}>
                <div className={style.background} />
            </div>
        </div>
    );
};

export default Loading;