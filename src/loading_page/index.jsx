import React from 'react';
import Loading from '../loading_spinner';
import style from './loading_page.module.css';


function LoadingPage() {
    return (
        <div className={style.loadingBackground}>
            <div className={style.container}>
                <h1 className={style.loadingText}> Brandon Murch</h1>
                <div className={style.spinnerContainer}>
                    <Loading />
                </div>
            </div>

        </div>
    )
}


export default LoadingPage;